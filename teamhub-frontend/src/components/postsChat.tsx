import { useQuery } from "@tanstack/react-query";
import { fetchPosts, Post } from "./api";

export default function PostsChat() {
  const { data, error, isLoading } = useQuery<Post[], Error>({
    queryKey: ["Posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const lastFivePosts = data ? data.slice(-5) : [];

  return (
    <>
      <div>
        {lastFivePosts?.map((post) => (
          <div className="chat chat-start gap-10" key={post.id}>
            <div className="chat-bubble chat-bubble-accent bg-purple-300 m-2 p-6 text-left">
              <p className="text-black m-1">{post.textInput}</p>
              <p className="badge badge-primary text-right m-1">
                {post.postType}
              </p>
              <p className="badge badge-outline m-1">{post.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
