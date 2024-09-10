import { useMutation } from "@tanstack/react-query";
import { updateMeeting } from "./api";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function MeetingUpdates() {
  const [summary, setSummary] = useState("");

  const location = useLocation();
  const meetingId = location.state?.meetingId as number;

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
    if (meetingId) {
      updateMeetingMutation.mutate(meetingId);
    } else {
      alert("Meeting ID is missing");
    }
  };

  const handleCloseMeeting = () => {
    if (meetingId) {
      closeMeetingMutation.mutate(meetingId);
    } else {
      alert("Meeting ID is missing");
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <section className="flex flex-col align-middle justify-center m-12">
          <textarea
            className="textarea textarea-success textarea-lg min-h-60 m-2"
            placeholder="Write your action points here"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          <button
            className="btn btn-primary border-t-cyan-300 w-40 self-center m-2"
            onClick={handleSave}
          >
            Save
          </button>
        </section>

        <section className="flex align-middle justify-center m-5">
          <Link to="/">
            <button className="btn btn-lg btn-secondary m-2">Go Back</button>
          </Link>
          <button
            className="btn btn-lg btn-accent m-2"
            onClick={handleCloseMeeting}
            disabled={closeMeetingMutation.isPending}
          >
            Close Meeting
          </button>
        </section>
      </div>
    </>
  );
}
