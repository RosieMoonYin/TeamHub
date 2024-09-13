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
        var prompt = $"Imagine you are a manager focused on effectivity. We are about to do a meeting, please provide a clear and concise summary of the following meeting topics so we know what to focus on in the meeting. keep it concise with 2-3 bullet points:\n{string.Join("\n", posts)}";

        var result = await _api.Completions.CreateCompletionAsync(new CompletionRequest
        {
            Prompt = prompt,
            MaxTokens = 150,
            Temperature = 0.5
        });

        return result?.Completions.FirstOrDefault()?.Text?.Trim() ?? "No summary available";
    }
}



