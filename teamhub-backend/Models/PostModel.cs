namespace teamhub_backend.Models;
public class Post
{
    public int Id { get; set; } //my primary key

    public required string PersonName { get; set; }

    public required string TextInput { get; set; }

    public string PostType { get; set; } = "General";

    public string Status { get; set; } = "Open";

    public int MeetingId { get; set; } //my foreign key

    public required Meeting Meeting { get; set; }
}