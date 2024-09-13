import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createPost } from "../api";
import PostsChat from "../postsChat";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ContributeForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [personName, setPersonName] = useState("");
  const [postType, setPostType] = useState("General");
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState("Open");
  const meetingId = location.state?.meetingId || 1;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      alert("Post created seccesfully");
      queryClient.invalidateQueries({ queryKey: ["post", "openMeetings"] });

      navigate("/");
      setPersonName("");
      setPostType("General");
      setTextInput("");
      setStatus("Open");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ personName, textInput, postType, status, meetingId });
  };

  return (
    <>
      <div className="flex justify-around flex-wrap w-full mt-20 pt-10 pb-20">
        <section className="flex flex-col align-middle  justify-center min-w-96 p-10 m-5">
          <PostsChat />
        </section>

        <section className="flex flex-col p-10 m-5 min-w-96">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered input-primary w-full max-w-s m-1"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />

            <select
              className="select select-primary w-full max-w-s m-1"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
            >
              {<option>Choose a category</option>}
              <option value="Issue">Challenge</option>
              <option value="Question">Question</option>
              <option value="Suggestion">Action</option>
              <option value="Suggestion">Idea</option>
            </select>

            <textarea
              className="textarea textarea-primary textarea-lg text-s m-1 h-64 w-full"
              placeholder="Share your thoughts here"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            ></textarea>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Flag as urgent</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={status == "Urgent"}
                  onChange={() =>
                    setStatus(status == "Urgent" ? "Open" : "Urgent")
                  }
                />
              </label>
            </div>

            <div className="m-4">
              <Link to="/">
                <button className="btn btn-secondary w-40 m-2">Go Back</button>
              </Link>
              <button
                type="submit"
                className="btn btn-success btn-m align-middle w-40 m-2"
              >
                {mutation.isPending ? "Creating..." : "Create"}
              </button>

              {mutation.isError && (
                <div className="text-red-500 mt-2">
                  Error: {mutation.error.message}
                </div>
              )}

              {mutation.isSuccess && (
                <div className="text-green-500 mt-2">
                  Post created successfully!
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
