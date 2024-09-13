using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace teamhub_backend;

public class UpdateMeetingDto
{
    public string? Summary { get; set; }
    public List<string>? ActionPoints { get; set; }
    public string? AISummary { get; set; }
    public string? Status { get; set; }
}


[ApiController]
[Route("api/[controller]")]
public class MeetingController : ControllerBase
{

    private readonly TeamhubDbContext _context;

    public MeetingController(TeamhubDbContext context)
    {
        _context = context;
    }


    // GET: api/meetings
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Meeting>>> GetMeetings()
    {
        var meetings = await _context.Meetings.ToListAsync();
        return Ok(meetings);
    }

    // GET: api/meetings/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Meeting>> GetMeeting(int id)
    {
        var meeting = await _context.Meetings
                .Include(m => m.Posts)
                .FirstOrDefaultAsync(m => m.Id == id);

        if (meeting == null)
        {
            return NotFound();
        }

        return Ok(meeting);
    }


    [HttpGet("open")]
    public async Task<ActionResult<IEnumerable<object>>> GetOpenMeetings()
    {
        var openMeetings = await _context.Meetings
            .Where(m => m.Status == "Open")
            .Select(m => new
            {
                m.Id,
                m.MeetingName,
                m.Description,
                m.MeetingDate,
                m.Status,
                PostCount = m.Posts != null ? m.Posts.Count : 0
            })
            .ToListAsync();

        return Ok(openMeetings);
    }




    [HttpGet("closed")]
    public async Task<ActionResult<IEnumerable<Meeting>>> GetClosedMeetings()
    {
        var closedMeetings = await _context.Meetings
                .Where(m => m.Status == "Closed")
                .ToListAsync();

        return Ok(closedMeetings);
    }


    // POST: api/meetings
    [HttpPost]
    public async Task<ActionResult<Meeting>> PostMeeting([FromBody] Meeting meeting)
    {
        _context.Meetings.Add(meeting);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMeeting), new { id = meeting.Id }, meeting);
    }



    // DELETE: api/meetings/{id}
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteMeeting(int id)
    {

        var meeting = await _context.Meetings.FindAsync(id);
        if (meeting == null)
        {
            return NotFound();
        }

        _context.Meetings.Remove(meeting);
        await _context.SaveChangesAsync();

        return NoContent();

    }


    // PATCH: api/meetings/{id}
    [HttpPatch("{id}")]
    public async Task<ActionResult<Meeting>> PatchMeeting(int id, [FromBody] UpdateMeetingDto updateMeetingDto)
    {

        var meeting = await _context.Meetings.FindAsync(id);
        if (meeting == null)
        {
            return NotFound();
        }

        if (updateMeetingDto.Summary != null)
        {
            meeting.Summary = updateMeetingDto.Summary;
        }
        if (updateMeetingDto.ActionPoints != null)
        {
            meeting.ActionPoints = updateMeetingDto.ActionPoints;
        }

        if (updateMeetingDto.AISummary != null)
        {
            meeting.AISummary = updateMeetingDto.AISummary;
        }

        if (updateMeetingDto.Status != null)
        {
            meeting.Status = updateMeetingDto.Status;
        }

        _context.Entry(meeting).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return Ok(meeting);
    }

}
