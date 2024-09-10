import { useMutation } from "@tanstack/react-query";
import { updateMeeting } from "./api";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MeetingUpdates() {
  const [summary, setSummary] = useState("");

  const updateMeetingMutation = useMutation({
    mutationFn: (id: number) => updateMeeting(id, { summary }),
    onSuccess: () => {
      alert("updates succesfull");
    },
    onError: (error) => {
      console.error("Error updating meeting:", error);
    },
  });

  const closeMeetingMutation = useMutation({
    mutationFn: (id: number) => updateMeeting(id, { status: "Closed" }),
    onSuccess: () => {
      alert("Meeting archived successfully");
    },
    onError: (error) => {
      console.error("Error closing meeting", error);
    },
  });

  const handleSave = () => {
    const id = 1; //static value for now!!!!!
    updateMeetingMutation.mutate(id);
  };

  const handleCloseMeeting = () => {
    const id = 1; //static value now!!!!!
    closeMeetingMutation.mutate(id);
  };

  return (
    <>
      <section>
        <textarea
          className="textarea textarea-success"
          placeholder="Write your action points here"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </section>

      <section>
        <Link to="/">
          <button className="btn btn-secondary bg-slate-400 m-1">
            Go Back
          </button>
        </Link>
        <button
          className="btn btn-accent bg-teal-500 m-1"
          onClick={handleCloseMeeting}
          disabled={closeMeetingMutation.isPending}
        >
          Close Meeting
        </button>
      </section>
    </>
  );
}
