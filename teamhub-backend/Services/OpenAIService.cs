namespace teamhub_backend;

using OpenAI_API;
using OpenAI_API.Completions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



public class OpenAIService
{
    private readonly OpenAIAPI _api;

    public OpenAIService(string apiKey)
    {
        _api = new OpenAIAPI(apiKey);
    }

    public async Task<string> GenerateSummaryAsync(IEnumerable<string> posts)
    {
        var prompt = $"Summarize the following posts:\n{string.Join("\n", posts)}";

        var result = await _api.Completions.CreateCompletionAsync(new CompletionRequest
        {
            Prompt = prompt,
            MaxTokens = 150, // Adjust as needed
            Temperature = 0.7 // Adjust as needed
        });

        return result?.Completions.FirstOrDefault()?.Text?.Trim() ?? "No summary available";
    }
}



