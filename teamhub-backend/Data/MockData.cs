namespace teamhub_backend;

public static class Data
{
    public static List<Meeting> Meetings { get; set; } = new List<Meeting>
    {
        new Meeting
        {
            Id = 1,
            MeetingName = "Bieniale Art Fair Planning",
            Description = "Discussion on upcoming art exhibitions, including artist selections, installation schedules, and marketing strategies.",
            MeetingDate = new DateTime(2024, 9, 15, 10, 0, 0, DateTimeKind.Utc)
        },
        new Meeting
        {
            Id = 2,
            MeetingName = "Gallery Staff Review",
            Description = "Review of staff performance and discussion on internal processes and improvements.",
            MeetingDate = new DateTime(2024, 9, 15, 14, 0, 0, DateTimeKind.Utc)
        },
        new Meeting
        {
            Id = 3,
            MeetingName = "Visitor Experience Feedback",
            Description = "Gather feedback from visitors on their gallery experience to improve services and exhibitions.",
            MeetingDate = new DateTime(2024, 9, 16, 11, 0, 0, DateTimeKind.Utc)
        },
        //status closed
        new Meeting
        {
            Id = 4,
            MeetingName = "Exhibition Debrief",
            Description = "Post-exhibition debrief discussing what went well and what could be improved for future exhibitions.",
            MeetingDate = new DateTime(2024, 9, 1, 16, 0, 0, DateTimeKind.Utc),
            Status = "Closed"
        },
        new Meeting
        {
            Id = 5,
            MeetingName = "Annual Gallery Review",
            Description = "Annual review of the gallery’s performance, financial status, and strategic planning for the upcoming year.",
            MeetingDate = new DateTime(2024, 9, 5, 9, 0, 0, DateTimeKind.Utc),
            Status = "Closed"
        },
        new Meeting
        {
            Id = 6,
            MeetingName = "Art Education Program Wrap-up",
            Description = "Wrap-up meeting for the art education programs held throughout the year, evaluating successes and areas for improvement.",
            MeetingDate = new DateTime(2024, 9, 8, 13, 30, 0, DateTimeKind.Utc),
            Status = "Closed"
        }
    };

    public static List<Post> Posts { get; set; } = new List<Post>
    {
                new Post
        {
            Id = 1,
            PersonName = "Olivia Martinez",
            TextInput = "Consider adding more interactive elements to enhance visitor engagement.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 10, 10, 0, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 2,
            PersonName = "Ethan Brown",
            TextInput = "The recent exhibition received great feedback, but we should explore more diverse art forms.",
            PostType = "Feedback",
            Status = "Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 10, 11, 30, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 3,
            PersonName = "Ava Wilson",
            TextInput = "Visitors appreciated the gallery’s layout; consider keeping it for future shows.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 11, 9, 15, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 4,
            PersonName = "James Lee",
            TextInput = "Suggest having more guided tours to improve the visitor experience.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 11, 10, 0, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 5,
            PersonName = "Emily Johnson",
            TextInput = "Feedback on the lighting was positive; consider using similar setups in future exhibitions.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 12, 12, 30, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 6,
            PersonName = "Michael Smith",
            TextInput = "The visitor survey indicated high satisfaction with the current exhibit space.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 12, 13, 45, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 7,
            PersonName = "Sophia Davis",
            TextInput = "Consider adding more interactive art pieces to engage visitors further.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 13, 8, 30, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 8,
            PersonName = "Lucas Green",
            TextInput = "Great job on the recent exhibition; the art display was particularly well-received.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 13, 9, 0, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 9,
            PersonName = "Mia Brown",
            TextInput = "Visitors enjoyed the art workshops; consider including more in future events.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 13, 10, 15, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 10,
            PersonName = "Daniel White",
            TextInput = "The gallery’s ambiance received positive feedback; keep this in mind for future exhibitions.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 3,
            CreatedAt = new DateTime(2024, 9, 13, 11, 0, 0, DateTimeKind.Utc)
        },

        // Posts for Meeting ID 2
        new Post
        {
            Id = 11,
            PersonName = "Olivia Martinez",
            TextInput = "The current staff scheduling system is causing some confusion; we should review it.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 10, 10, 0, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 12,
            PersonName = "Ethan Brown",
            TextInput = "We need clearer guidelines for staff roles during gallery events to avoid overlaps.",
            PostType = "Improvement",
            Status = "Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 10, 11, 30, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 13,
            PersonName = "Ava Wilson",
            TextInput = "Consider implementing regular staff training sessions to keep everyone updated on gallery policies.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 11, 9, 15, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 14,
            PersonName = "James Lee",
            TextInput = "The recent staff feedback indicates a need for more support during high-traffic events.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 11, 10, 0, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 15,
            PersonName = "Emily Johnson",
            TextInput = "Review of the current staff roles shows some gaps in responsibilities; let’s address these.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 12, 12, 30, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 16,
            PersonName = "Michael Smith",
            TextInput = "Consider adjusting staff shifts to better match peak gallery hours.",
            PostType = "Improvement",
            Status = "Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 12, 13, 45, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 17,
            PersonName = "Sophia Davis",
            TextInput = "Positive feedback from staff on recent training sessions; keep up the good work.",
            PostType = "Feedback",
            Status = "Not Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 13, 8, 30, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 18,
            PersonName = "Lucas Green",
            TextInput = "Review staff communication channels to ensure everyone is informed about gallery events.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 2,
            CreatedAt = new DateTime(2024, 9, 13, 9, 0, 0, DateTimeKind.Utc)
        },

        // Posts for Meeting ID 1
        new Post
        {
            Id = 19,
            PersonName = "Olivia Martinez",
            TextInput = "Ensure the art installations for the next show are completed on time.",
            PostType = "Improvement",
            Status = "Not Urgent",
            MeetingId = 1,
            CreatedAt = new DateTime(2024, 9, 10, 10, 0, 0, DateTimeKind.Utc)
        },
        new Post
        {
            Id = 20,
            PersonName = "Ethan Brown",
            TextInput = "Consider adding a section for local artists in the upcoming art show to increase community engagement.",
            PostType = "Feedback",
            Status = "Urgent",
            MeetingId = 1,
            CreatedAt = new DateTime(2024, 9, 10, 11, 30, 0, DateTimeKind.Utc)
        }
    };
}
