using Microsoft.AspNetCore.Mvc;
namespace teamhub_backend
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        // GET: api/posts
        [HttpGet]
        public ActionResult<IEnumerable<Post>> GetAllPosts()
        {
            return Ok(MockData.Posts);
        }

        // GET: api/posts/{id}
        [HttpGet("{id}")]
        public ActionResult<Post> GetPost(int id)
        {
            var post = MockData.Posts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("MeetingId")]
        public ActionResult<IEnumerable<Post>> GetPostsByMeetingId([FromQuery] int meetingId)
        {
            var meeting = MockData.Meetings.FirstOrDefault(m => m.Id == meetingId);
            if (meeting == null)
            {
                return NotFound("Meeting not found");
            }

            var posts = MockData.Posts.Where(p => p.MeetingId == meetingId).ToList();
            return Ok(posts);
        }


        // POST: api/posts
        [HttpPost]
        public ActionResult<Post> CreatePost(Post post)
        {
            var meeting = MockData.Meetings.FirstOrDefault(m => m.Id == post.MeetingId);
            if (meeting == null)
            {
                return BadRequest("Meeting not found");
            }

            post.Id = MockData.Posts.Count + 1;
            MockData.Posts.Add(post);

            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
        }

        // DELETE: api/posts/{id}
        [HttpDelete("{id}")]
        public ActionResult DeletePost(int id)
        {
            var post = MockData.Posts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            MockData.Posts.Remove(post);
            return NoContent();
        }
    }
}
