namespace teamhub_backend;

public static class Data
{
    public static List<Meeting> Meetings { get; set; } = new List<Meeting>
    {
        new Meeting
        {
            Id = 1,
            MeetingName = "Project Kickoff",
            Description = "Initial meeting to discuss project scope and goals.",
            MeetingDate = new DateTime(2024, 09, 09)
        },
        new Meeting
        {
            Id = 2,
            MeetingName = "Design Review",
            Description = "Review the initial design drafts for feedback.",
            MeetingDate = new DateTime(2024, 09, 10)
        },
        new Meeting
        {
            Id = 3,
            MeetingName = "Weekly Stand-up",
            Description = "Regular update on team progress.",
            MeetingDate = new DateTime(2024, 09, 11)
        }
    };

    public static List<Post> Posts { get; set; } = new List<Post>
    {
        // Posts for Meeting 1 (Project Kickoff)
        new Post
        {
            Id = 1,
            PersonName = "Alice",
            TextInput = "Can we finally decide on the project name? I vote for 'Operation Unstoppable'.",
            PostType = "Suggestion",
            Status = "Open",
            MeetingId = 1
        },
        new Post
        {
            Id = 2,
            PersonName = "Bob",
            TextInput = "What’s the deadline for delivering the first draft? Asking for a friend.",
            PostType = "Question",
            Status = "Open",
            MeetingId = 1
        },
        new Post
        {
            Id = 3,
            PersonName = "Charlie",
            TextInput = "Are we sure we’re going to meet this insane deadline? Can we push it to 2025?",
            PostType = "Concern",
            Status = "Open",
            MeetingId = 1
        },

        // Posts for Meeting 2 (Design Review)
        new Post
        {
            Id = 4,
            PersonName = "Dave",
            TextInput = "The logo looks like a potato. Is that intentional?",
            PostType = "Feedback",
            Status = "Open",
            MeetingId = 2
        },
        new Post
        {
            Id = 5,
            PersonName = "Eve",
            TextInput = "The color scheme is a bit... neon? My eyes are still recovering.",
            PostType = "Critique",
            Status = "Open",
            MeetingId = 2
        },
        new Post
        {
            Id = 6,
            PersonName = "Frank",
            TextInput = "Can we make the button at least 20% bigger? I’m not saying people will miss it, but...",
            PostType = "Improvement",
            Status = "Open",
            MeetingId = 2
        },

        // Posts for Meeting 3 (Weekly Stand-up)
        new Post
        {
            Id = 7,
            PersonName = "Grace",
            TextInput = "I’ve fixed that bug that no one could reproduce, just thought I’d mention it.",
            PostType = "Update",
            Status = "Closed",
            MeetingId = 3
        },
        new Post
        {
            Id = 8,
            PersonName = "Hank",
            TextInput = "I know it’s a stand-up, but can we sit down? My legs are killing me.",
            PostType = "Question",
            Status = "Open",
            MeetingId = 3
        },
        new Post
        {
            Id = 9,
            PersonName = "Ivy",
            TextInput = "I’ve merged the code. It's a little... 'experimental'. Hope that’s fine.",
            PostType = "Update",
            Status = "Open",
            MeetingId = 3
        }
    };
}
