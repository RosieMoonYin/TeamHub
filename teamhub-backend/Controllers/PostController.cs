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
            return Ok(Data.Posts);
        }

        // GET: api/posts/{id}
        [HttpGet("{id}")]
        public ActionResult<Post> GetPost(int id)
        {
            var post = Data.Posts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("MeetingId")]
        public ActionResult<IEnumerable<Post>> GetPostsByMeetingId([FromQuery] int meetingId)
        {
            var posts = Data.Posts.Where(p => p.MeetingId == meetingId).ToList();
            if (posts == null || !posts.Any())
            {
                return NotFound("No posts found for the specified meeting ID");
            }
            return Ok(posts);
        }

        // POST: api/posts
        [HttpPost]
        public ActionResult<Post> CreatePost(Post post)
        {
            var meeting = Data.Meetings.FirstOrDefault(m => m.Id == post.MeetingId);
            if (meeting == null)
            {
                return BadRequest("Meeting not found");
            }

            post.Id = Data.Posts.Count + 1;
            Data.Posts.Add(post);

            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
        }

        // DELETE: api/posts/{id}
        [HttpDelete("{id}")]
        public ActionResult DeletePost(int id)
        {
            var post = Data.Posts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }

            Data.Posts.Remove(post);
            return NoContent();
        }
    }
}
