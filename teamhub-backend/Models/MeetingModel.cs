using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace teamhub_backend;

public class Meeting
{
    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(300)]
    public required string MeetingName { get; set; }

    [StringLength(500)]
    public string? Description { get; set; }

    public required DateTime MeetingDate { get; set; }

    [StringLength(2000)]
    public string? Summary { get; set; }

    public List<string>? ActionPoints { get; set; } = [];

    [StringLength(1000)]
    public string? AISummary { get; set; }

    [StringLength(100)]
    public string? Status { get; set; } = "Open";

    public List<Post>? Posts { get; set; } = [];

}
