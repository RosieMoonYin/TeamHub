using System.Linq;

namespace teamhub_backend
{
    public class DbSeeder
    {
        private readonly TeamhubDbContext _context;

        public DbSeeder(TeamhubDbContext context)
        {
            _context = context;
        }


        public void Seed()
        {
            if (_context.Meetings.Any() || _context.Posts.Any())
            {
                return;
            }

            _context.Meetings.AddRange(

            new Meeting
            {

                MeetingName = "Bieniale Art Fair Planning",
                Description = "Discussion on upcoming art exhibitions, including artist selections, installation schedules, and marketing strategies.",
                MeetingDate = new DateTime(2024, 9, 15, 10, 0, 0, DateTimeKind.Utc),

            },

            new Meeting
            {

                MeetingName = "Gallery Staff Review",
                Description = "Review of staff performance and discussion on internal processes and improvements.",
                MeetingDate = new DateTime(2024, 9, 15, 14, 0, 0, DateTimeKind.Utc),
            },


            new Meeting
            {

                MeetingName = "Visitor Experience Feedback",
                Description = "Gather feedback from visitors on their gallery experience to improve services and exhibitions.",
                MeetingDate = new DateTime(2024, 9, 16, 11, 0, 0, DateTimeKind.Utc),
            },



            // Status closed
            new Meeting
            {

                MeetingName = "Exhibition Debrief",
                Description = "Post-exhibition debrief discussing what went well and what could be improved for future exhibitions.",
                MeetingDate = new DateTime(2024, 9, 1, 16, 0, 0, DateTimeKind.Utc),
                Status = "Closed",
                Summary = "The exhibition was well-received with positive feedback on the layout and artist selections.",
                ActionPoints = new List<string>
                {
                        "Improve promotional strategies for better reach.",
                        "Increase member communication. Target event marketing to boost numbers on launch night."
                }
            },


            new Meeting
            {

                MeetingName = "Annual Gallery Review",
                Description = "Annual review of the gallery’s performance, financial status, and strategic planning for the upcoming year.",
                MeetingDate = new DateTime(2024, 9, 5, 9, 0, 0, DateTimeKind.Utc),
                Status = "Closed",
                Summary = "The gallery performed well financially, exceeding revenue targets.",
                ActionPoints = new List<string>
                {
                        "Expand outreach programs to engage a broader audience.",
                        "Explore new funding opportunities to support gallery initiatives."
                }
            },


            new Meeting
            {

                MeetingName = "Art Education Program Wrap-up",
                Description = "Wrap-up meeting for the art education programs held throughout the year, evaluating successes and areas for improvement.",
                MeetingDate = new DateTime(2024, 9, 8, 13, 30, 0, DateTimeKind.Utc),
                Status = "Closed",
                Summary = "The art education programs were successful in increasing community engagement and participation.",
                ActionPoints = new List<string>
                {
                        "Develop advanced workshops to further engage participants.",
                        "Improve accessibility of programs to reach a wider audience."
                }
            }
        );

            _context.SaveChanges();

            SeedPosts();
        }

        public void SeedPosts()
        {
            if (_context.Posts.Any())
            {
                return;
            }

            // Seed Posts
            _context.Posts.AddRange(

            // Posts for Meeting ID 1
            new Post
            {
                PersonName = "Olivia Martinez",
                TextInput = "Ensure the art installations for the next show are completed on time.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 1,
                CreatedAt = new DateTime(2024, 9, 10, 10, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Ethan Brown",
                TextInput = "Consider adding a section for local artists in the upcoming art show to increase community engagement.",
                PostType = "Feedback",
                Status = "Urgent",
                MeetingId = 1,
                CreatedAt = new DateTime(2024, 9, 10, 11, 30, 0, DateTimeKind.Utc)
            },


            // Posts for Meeting ID 2
            new Post
            {
                PersonName = "Olivia Martinez",
                TextInput = "The current staff scheduling system is causing some confusion; we should review it.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 10, 10, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Ethan Brown",
                TextInput = "We need clearer guidelines for staff roles during gallery events to avoid overlaps.",
                PostType = "Improvement",
                Status = "Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 10, 11, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Ava Wilson",
                TextInput = "Consider implementing regular staff training sessions to keep everyone updated on gallery policies.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 11, 9, 15, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "James Lee",
                TextInput = "The recent staff feedback indicates a need for more support during high-traffic events.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 11, 10, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Emily Johnson",
                TextInput = "Review of the current staff roles shows some gaps in responsibilities; let’s address these.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 12, 12, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Michael Smith",
                TextInput = "Consider adjusting staff shifts to better match peak gallery hours.",
                PostType = "Improvement",
                Status = "Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 12, 13, 45, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Sophia Davis",
                TextInput = "Positive feedback from staff on recent training sessions; keep up the good work.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 13, 8, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Lucas Green",
                TextInput = "Review staff communication channels to ensure everyone is informed about gallery events.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 2,
                CreatedAt = new DateTime(2024, 9, 13, 9, 0, 0, DateTimeKind.Utc)
            },

            //Post for Meeting ID 3
            new Post
            {
                PersonName = "Olivia Martinez",
                TextInput = "Consider adding more interactive elements to enhance visitor engagement.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 10, 10, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Ethan Brown",
                TextInput = "The recent exhibition received great feedback, but we should explore more diverse art forms.",
                PostType = "Feedback",
                Status = "Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 10, 11, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Ava Wilson",
                TextInput = "Visitors appreciated the gallery’s layout; consider keeping it for future shows.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 11, 9, 15, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "James Lee",
                TextInput = "Suggest having more guided tours to improve the visitor experience.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 11, 10, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Emily Johnson",
                TextInput = "Feedback on the lighting was positive; consider using similar setups in future exhibitions.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 12, 12, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Michael Smith",
                TextInput = "The visitor survey indicated high satisfaction with the current exhibit space.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 12, 13, 45, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Sophia Davis",
                TextInput = "Consider adding more interactive art pieces to engage visitors further.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 13, 8, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Lucas Green",
                TextInput = "Great job on the recent exhibition; the art display was particularly well-received.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 13, 9, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Mia Brown",
                TextInput = "Visitors enjoyed the art workshops; consider including more in future events.",
                PostType = "Improvement",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 13, 10, 15, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Daniel White",
                TextInput = "The gallery’s ambiance received positive feedback; keep this in mind for future exhibitions.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 3,
                CreatedAt = new DateTime(2024, 9, 13, 11, 0, 0, DateTimeKind.Utc)
            },

            //Posts for Meeting ID 4
            new Post
            {

                PersonName = "Sophia Chen",
                TextInput = "The inclusion of Ai Weiwei's sunflower seeds was a standout feature of the exhibition. We should consider more interactive installations that echo his unique approach.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 4,
                CreatedAt = new DateTime(2024, 9, 2, 10, 0, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Liam Johnson",
                TextInput = "Ai Weiwei's work, particularly his use of sunflowers, created a strong emotional connection with visitors. For future exhibitions, integrating elements that offer such profound interaction could enhance the overall experience.",
                PostType = "Improvement",
                Status = "Urgent",
                MeetingId = 4,
                CreatedAt = new DateTime(2024, 9, 2, 11, 15, 0, DateTimeKind.Utc)
            },
            new Post
            {

                PersonName = "Emily Davis",
                TextInput = "Reflecting on Ai Weiwei's sunflower seeds, we should aim to incorporate more innovative art forms that challenge traditional exhibition setups and invite visitors to engage on a deeper level.",
                PostType = "Feedback",
                Status = "Not Urgent",
                MeetingId = 4,
                CreatedAt = new DateTime(2024, 9, 2, 13, 30, 0, DateTimeKind.Utc)
            },
            new Post
            {
                PersonName = "Mia Thompson",
                TextInput = "Given the delicate nature of Ai Weiwei's sunflower seeds, it's crucial to ensure their transportation is handled with utmost care to preserve their quality. We should review and possibly enhance our logistics procedures to prevent any damage during transit.",
                PostType = "Improvement",
                Status = "Urgent",
                MeetingId = 4,
                CreatedAt = new DateTime(2024, 9, 2, 14, 45, 0, DateTimeKind.Utc)
            }

            );
            _context.SaveChanges();
        }

    }
}

