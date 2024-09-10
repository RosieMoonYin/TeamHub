import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import PostsChat from "./postsChat";
import { createPost } from "./api";

export default function ContributeForm() {
  const [personName, setPersonName] = useState("");
  const [postType, setPostType] = useState("General");
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState("Open");
  const [meetingId, setMeetingId] = useState(1);

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      <p>create was successful</p>;
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
      <div className="flex bg-green-400 w-full p-20">
        <section className="flex flex-col align-middle justify-center w-1/2 bg-slate-50 p-10 m-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered input-primary w-full max-w-xs m-1"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />

            <select
              className="select select-primary w-full max-w-xs m-1"
              value={meetingId}
              onChange={(e) => setMeetingId(Number(e.target.value))}
            >
              {/* <option disabled selected>
                Choose a Meeting
              </option> */}
              <option value="1">Meeting name</option>
              <option value="2">Meeting name 2</option>
              <option value="3">Meeting name 3</option>
            </select>

            <select
              className="select select-primary w-full max-w-xs m-1"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
            >
              {/* <option disabled selected>
                Choose a category
              </option> */}
              <option value="Concern">Concern</option>
              <option value="Question">Question</option>
              <option value="Suggestion">Suggestion</option>
            </select>

            <textarea
              className="textarea textarea-primary textarea-lg text-s p-3 m-1 h-64 w-full"
              placeholder="Share your thoughts here"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            ></textarea>

            <div className="form-control flex justify-start">
              <label className="label cursor-pointer flex">
                <p className="label-text">Flag as urgent</p>
                <input
                  type="checkbox"
                  className="toggle"
                  checked={status == "Urgent"}
                  onChange={() =>
                    setStatus(status == "Urget" ? "Open" : "Urgent")
                  }
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-40 m-1">
              Submit
            </button>
          </form>
        </section>

        <section className="flex flex-col align-middle justify-center w-1/2 bg-slate-100 p-10 m-5">
          <PostsChat />
        </section>
      </div>
    </>
  );
}
