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
      queryClient.invalidateQueries({ queryKey: ["openMeetings", "Meetings"] });
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
      <div className="flex flex-center justify-center mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col align-middle justify-center  max-w-96"
        >
          <input
            type="text"
            placeholder="Meeting name"
            value={meetingName}
            onChange={(e) => setMeetingName(e.target.value)}
            className="input input-bordered input-primary w-full max-w-s m-2"
          />
          <input
            type="text"
            placeholder="Brief description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered input-primary w-full max-w-s m-2"
          />

          <label
            htmlFor="meetingDateTime"
            className="text-xs text-slate-500 text-left max-w-s mt-2 ms-3"
          >
            Meeting date and time:
          </label>
          <input
            type="datetime-local"
            id="meetingDateTime"
            name="meetingDateTime"
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
            className="input input-bordered input-primary w-full max-w-s m-2"
          />
          <div className="m-6 flex">
            <Link to="/">
              <button className="btn btn-secondary w-40 m-2">Go Back</button>
            </Link>

            <button
              type="submit"
              className="btn btn-info w-40 m-2"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Creating..." : "Create"}
            </button>
          </div>

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
      </div>
    </>
  );
}
