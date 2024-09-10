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
            {/* <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div> */}
            <div className="chat-bubble chat-bubble-accent m-2 p-6">
              {post.textInput}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
