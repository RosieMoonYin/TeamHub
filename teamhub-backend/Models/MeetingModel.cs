namespace teamhub_backend;

    public class Meeting
    {
        public int Id { get; set; }

        public required string MeetingName { get; set; }

        public string? Description { get; set; }

        public required DateTime MeetingDate { get; set; }


        public string? Summary { get; set; } // user will add at end of meeting

        public string? AISummary { get; set; }

        public List<Post>? Posts { get; set; } = new List<Post>();
    
    }
