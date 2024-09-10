import { useMutation, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createMeeting } from "../api";

export default function AddMeetingForm() {
  const [meetingName, setMeetingName] = useState("");
  const [description, setDescription] = useState("");
  const [meetingDate, setMeetingDate] = useState("");

  const queryClient = new QueryClient();

  const mutation = useMutation({
    mutationFn: createMeeting,
    onSuccess: () => {
      console.log("Meeting created seccesfully");
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
    },
    onError: (error) => {
      console.error("Error creating meeting", error);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate({ meetingName, description, meetingDate });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meeting name"
          value={meetingName}
          onChange={(e) => setMeetingName(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Brief description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <label htmlFor="meetingDateTime">Meeting (date and time):</label>
        <input
          type="datetime-local"
          id="meetingDateTime"
          name="meetingDateTime"
          value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <Link to="/">
          <button className="btn btn-accent bg-slate-400 w-40 m-1">
            Go Back
          </button>
        </Link>

        <button
          type="submit"
          className="btn btn-primary w-40 m-1"
          disabled={mutation.isPending}
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
            Meeting created successfully!
          </div>
        )}
      </form>
    </>
  );
}
