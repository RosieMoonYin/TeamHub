using Microsoft.AspNetCore.Mvc;
namespace teamhub_backend;

public class UpdateMeetingDto
{
    public string? Summary { get; set; }
    public string? AISummary { get; set; }
    public string? Status { get; set; }
}


    [ApiController]
    [Route("api/[controller]")]
    public class MeetingController : ControllerBase
    {
        // GET: api/meetings
        [HttpGet]
        public ActionResult<IEnumerable<Meeting>> GetMeetings()
        {
            return Ok(Data.Meetings);
        }

        // GET: api/meetings/{id}
        [HttpGet("{id}")]
        public ActionResult<Meeting> GetMeeting(int id)
        {
            var meeting = Data.Meetings.FirstOrDefault(m => m.Id == id);
            if (meeting == null)
            {
                return NotFound();
            }
            return Ok(meeting);
        }

        // POST: api/meetings
        [HttpPost]
        public ActionResult<Meeting> PostMeeting([FromBody] Meeting meeting)
        {
            meeting.Id = Data.Meetings.Count + 1;
            Data.Meetings.Add(meeting);
            return CreatedAtAction(nameof(GetMeeting), new { id = meeting.Id }, meeting);
        }

        // DELETE: api/meetings/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteMeeting(int id)
        {
            var meeting = Data.Meetings.FirstOrDefault(m => m.Id == id);
            if (meeting == null)
            {
                return NotFound();
            }

            Data.Meetings.Remove(meeting);
            return NoContent();
        }

        // PATCH: api/meetings/{id}
        [HttpPatch("{id}")]
        public ActionResult<Meeting> PatchMeeting(int id, [FromBody] UpdateMeetingDto updateMeetingDto)
        {
            var meeting = Data.Meetings.FirstOrDefault(m => m.Id == id);
            if (meeting == null)
            {
                return NotFound();
            }

            if (updateMeetingDto.Summary != null)
            {
                meeting.Summary = updateMeetingDto.Summary;
            }

            if (updateMeetingDto.AISummary != null)
            {
                meeting.AISummary = updateMeetingDto.AISummary;
            }

            if (updateMeetingDto.Status != null)
            {
                meeting.Status = updateMeetingDto.Status;
            }

            return Ok(meeting);
        }
    }

