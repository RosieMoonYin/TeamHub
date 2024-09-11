using Microsoft.AspNetCore.Mvc;

namespace teamhub_backend;

[ApiController]
[Route("api/[controller]")]
public class OpenAIController : ControllerBase
{
    private readonly OpenAIService _openAIService;

    public OpenAIController(OpenAIService openAIService)
    {
        _openAIService = openAIService;
    }

    // GET: api/openai/meetings/{id}/summary
    [HttpGet("meetings/{id}/summary")]
    public async Task<ActionResult> GetMeetingSummary(int id)
    {
        var meeting = Data.Meetings.FirstOrDefault(m => m.Id == id);
        if (meeting == null || meeting.Posts == null || meeting.Posts.Count == 0)
        {
            return NotFound("No posts found for the specified meeting.");
        }

        try
        {
            var summary = await _openAIService.GenerateSummaryAsync(meeting.Posts.Select(p => p.TextInput).ToList());
            return Ok(new { Summary = summary });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}

