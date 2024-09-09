using Microsoft.AspNetCore.Mvc;
namespace teamhub_backend
{
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
    }
}
