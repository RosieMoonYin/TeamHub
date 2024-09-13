import { useMutation } from "@tanstack/react-query";
import { updateMeeting } from "./api";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function MeetingUpdates() {
  const [summary, setSummary] = useState<string>("");
  const [actionPoints, setActionPoints] = useState<string[]>(["", ""]);

  const navigate = useNavigate();
  const location = useLocation();
  const meetingId = location.state?.meetingId as number;

  const updateMeetingMutation = useMutation({
    mutationFn: (id: number) => updateMeeting(id, { summary, actionPoints }),
    onSuccess: () => {
      alert("updates succesfull");
      setSummary("");
      setActionPoints(["", ""]);
    },
    onError: (error) => {
      console.error("Error updating meeting:", error);
    },
  });

  const closeMeetingMutation = useMutation({
    mutationFn: (id: number) => updateMeeting(id, { status: "Closed" }),
    onSuccess: () => {
      alert("Meeting archived successfully");
      navigate("/");
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
      <div className="flex flex-col ms-40 me-40 mb-20">
        <section className="flex flex-col align-middle justify-center m-12">
          <textarea
            className="textarea textarea-accent textarea-lg min-h-60 m-2"
            placeholder="Summarize meeting here"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>

          <textarea
            className="textarea textarea-info textarea-lg min-h-20 m-2"
            placeholder="Add first action point"
            value={actionPoints[0]}
            onChange={(e) => {
              const updatedPoints = [...actionPoints];
              updatedPoints[0] = e.target.value;
              setActionPoints(updatedPoints);
            }}
          ></textarea>

          <textarea
            className="textarea textarea-info textarea-lg min-h-20 m-2"
            placeholder="Add another action point"
            value={actionPoints[1]}
            onChange={(e) => {
              const updatedPoints = [...actionPoints];
              updatedPoints[1] = e.target.value;
              setActionPoints(updatedPoints);
            }}
          ></textarea>

          <button
            className="btn btn-primary w-40 self-center m-2"
            onClick={handleSave}
          >
            Save
          </button>
        </section>

        <section className="flex align-middle justify-center m-2">
          <Link to="/">
            <button className="btn btn-l btn-secondary btn-outline w-40 m-2">
              Go Back
            </button>
          </Link>
          <button
            className="btn btn-l btn-info w-40 m-2"
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
