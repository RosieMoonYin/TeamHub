namespace teamhub_backend;
public class Post
{
    public int Id { get; set; } 

    public required string PersonName { get; set; }

    public required string TextInput { get; set; }

    public string PostType { get; set; } = "General";

    public string Status { get; set; } = "Open";

    public int MeetingId { get; set; } //my foreign key

}