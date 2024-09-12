using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace teamhub_backend;
public class Post
{

    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public required string PersonName { get; set; }

    [Required]
    public required string TextInput { get; set; }

    [StringLength(100)]
    public string PostType { get; set; } = "General";

    [StringLength(100)]
    public string Status { get; set; } = "Not Urgent";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int MeetingId { get; set; } //my foreign key

}