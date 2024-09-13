using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace teamhub_backend
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly TeamhubDbContext _context;

        public PostsController(TeamhubDbContext context)
        {
            _context = context;
        }

        // GET: api/posts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetAllPosts()
        {
            var posts = await _context.Posts.ToListAsync();
            return Ok(posts);

        }

        // GET: api/posts/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);

        }

        [HttpGet("MeetingId")]
        public async Task<ActionResult<IEnumerable<Post>>> GetPostsByMeetingId([FromQuery] int meetingId)
        {
            var meeting = await _context.Meetings.FindAsync(meetingId);
            if (meeting == null)
            {
                return NotFound("Meeting not found");
            }

            var posts = await _context.Posts
                .Where(p => p.MeetingId == meetingId)
                .ToListAsync();

            return Ok(posts);

        }



        // POST: api/posts
        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost(Post post)
        {
            var meeting = await _context.Meetings.FindAsync(post.MeetingId);
            if (meeting == null)
            {
                return BadRequest("Meeting not found");
            }

            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);

        }

        // DELETE: api/posts/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
