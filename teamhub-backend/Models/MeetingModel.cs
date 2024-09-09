public class Meeeting
{
    public int Id { get; set; }

    public required string MeetingName { get; set; }

    public string? Description { get; set; }

    public string? Summary { get; set; }

    public required DateTime MeetingDate { get; set; }

    public List<Posts> Post { get; set; }
}