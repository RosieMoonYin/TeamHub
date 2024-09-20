import { useQuery } from "@tanstack/react-query";
import { fetchPosts, Post } from "./api";
import { PostsForArchiveProps } from "./searchArchivePosts";

const postTypeColors: Record<string, string> = {
  Critique: "bg-pink-300",
  Challenge: "bg-pink-300",
  Question: "bg-orange-300",
  Issue: "bg-orange-300",
  Action: "bg-lime-200",
  Feedback: "bg-lime-200",
  Improvement: "bg-purple-300",
  Idea: "bg-blue-300",
};

export default function PostsForArchive({ searchTerm }: PostsForArchiveProps) {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["Posts"],
    queryFn: () => fetchPosts(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (!posts) {
    return <div>Loading...</div>;
  }

  const filteredPosts = posts.filter((post) => {
    const body = post.textInput;
    return (
      body &&
      typeof body === "string" &&
      body.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="flex flex-wrap justify-center m-10 gap-2">
      {filteredPosts?.map((post) => {
        const cardColor =
          postTypeColors[post.postType ?? ""] || "bg-purple-300";
        return (
          <div key={post.id} className={`card ${cardColor} w-96 shadow-xl`}>
            <div className="card-body">
              <div className="flex">
                <div className="badge badge-primary badge-sm m-1">
                  {post.postType}
                </div>

                {post.status == "Urgent" && (
                  <div className="badge badge-secondary badge-sm m-1">
                    {post.status}
                  </div>
                )}
              </div>
              <h2 className="card-title">{post.personName}</h2>
              <p className="text-left text-xs">{post.textInput}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
