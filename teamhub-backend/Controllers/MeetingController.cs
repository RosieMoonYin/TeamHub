using Microsoft.AspNetCore.Mvc;
using teamhub_backend.Models;

namespace teamhub_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MeetingController : ControllerBase
{
    private static List<Meeting> Meetings = new List<Meeting>();
    private static List<Post> Posts = new List<Post>(); 

    // GET: api/meetings
    [HttpGet]
    public ActionResult<IEnumerable<Meeting>> GetMeetings()
    {
        return Ok(Meetings);
    }

    // GET: api/meetings/{id}
    [HttpGet("{id}")]
    public ActionResult<Meeting> GetMeeting(int id)
    {
        var meeting = Meetings.FirstOrDefault(m => m.Id == id);
        if (meeting == null)
        {
            return NotFound();
        }
        return Ok(meeting);
    }

    [HttpPost]
public ActionResult<Meeting> PostMeeting([FromBody] Meeting meeting)
{
    meeting.Id = Meetings.Count + 1; 
    Meetings.Add(meeting);
    return CreatedAtAction(nameof(GetMeeting), new { id = meeting.Id }, meeting);
}


// DELETE: api/meetings/{id}
[HttpDelete("{id}")]
public ActionResult DeleteMeeting(int id)
{
        var meeting = Meetings.FirstOrDefault(m => m.Id == id);
        if (meeting == null)
        {
            return NotFound();
        }

        Meetings.Remove(meeting);
        return NoContent();
    }

    // GET: api/meetings/{meetingId}/posts
    [HttpGet("{meetingId}/posts")]
    public ActionResult<IEnumerable<Post>> GetPostsForMeeting(int meetingId)
    {
        var meeting = Meetings.FirstOrDefault(m => m.Id == meetingId);
        if (meeting == null)
        {
            return NotFound("Meeting not found.");
        }

        var postsForMeeting = Posts.Where(p => p.MeetingId == meetingId).ToList();
        return Ok(postsForMeeting);
    }
}

