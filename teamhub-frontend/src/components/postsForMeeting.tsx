import { useQuery } from "@tanstack/react-query";
import { fetchPostsByMeetingId, Post } from "./api";
import { useLocation } from "react-router-dom";

const postTypeColors: Record<string, string> = {
  Critique: "bg-red-100",
  Improvement: "bg-yellow-100",
  Feedback: "bg-green-100",
};

export default function PostsForMeeting() {
  const location = useLocation();
  const meetingId = location.state?.meetingId as number;

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["Posts", meetingId],
    queryFn: () => fetchPostsByMeetingId(meetingId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An erro occurred: {error.message}</div>;

  //i will add logic for displaying selected meeting only
  //show urgent first

  return (
    <div className="flex flex-wrap justify-center m-10 gap-2">
      {posts?.map((post) => {
        const cardColor = postTypeColors[post.postType ?? ""] || "bg-base-100";
        return (
          <div key={post.id} className={`card ${cardColor} w-96 shadow-xl`}>
            <div className="card-body">
              <h2 className="card-title">{post.personName}</h2>
              <p>{post.textInput}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-xs">Archive</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
