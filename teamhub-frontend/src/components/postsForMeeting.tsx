import { useQuery } from "@tanstack/react-query";
import { fetchPostsByMeetingId, Post } from "./api";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const postTypeColors: Record<string, string> = {
  Critique: "bg-pink-300",
  Challenge: "bg-pink-300",
  Question: "bg-orange-300",
  Action: "bg-lime-300",
  Feedback: "bg-lime-300",
  Improvement: "bg-purple-300",
  Idea: "bg-blue-300",
};

export default function PostsForMeeting() {
  const location = useLocation();
  const meetingId = location.state?.meetingId as number;

  const [hiddenPosts, setHiddenPosts] = useState<number[]>(
    JSON.parse(localStorage.getItem("hiddenPosts") || "[]")
  );

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

  const handleArchive = (postId: number) => {
    const updatedHiddenPosts = [...hiddenPosts, postId];
    setHiddenPosts(updatedHiddenPosts);
    localStorage.setItem("hiddenPosts", JSON.stringify(updatedHiddenPosts));
  };

  return (
    <div className="flex flex-wrap justify-center m-10 gap-2">
      {posts
        ?.filter((post) => !hiddenPosts.includes(post.id))
        .map((post) => {
          const cardColor =
            postTypeColors[post.postType ?? ""] || "bg-base-100";

          return (
            <div key={post.id} className={`card ${cardColor} w-96 shadow-xl`}>
              <div className="card-body">
                {post.status == "Urgent" && (
                  <div className="badge badge-primary badge-sm m-1">
                    {post.status}
                  </div>
                )}
                <h2 className="card-title">{post.personName}</h2>
                <p>{post.textInput}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-xs"
                    onClick={() => handleArchive(post.id)}
                  >
                    Archive
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
