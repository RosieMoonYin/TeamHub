import { useQuery } from "@tanstack/react-query";
import { fetchPosts, Post } from "./api";

export default function PostsMeeting() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["Posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An erro occurred: {error.message}</div>;

  //i will add logic for displaying selected meeting only
  //show urgent first

  return (
    <div className="flex flex-wrap justify-center m-10 gap-2">
      {posts?.map((post) => (
        <div key={post.id} className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.personName}</h2>
            <p>{post.textInput}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
