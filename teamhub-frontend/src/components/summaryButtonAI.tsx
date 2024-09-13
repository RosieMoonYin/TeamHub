import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchAISummary } from "./api";
import { useState } from "react";

export default function SummaryButtonAI() {
  const location = useLocation();
  const meetingId = location.state?.meetingId;

  const [summary, setSummary] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: () => fetchAISummary(meetingId),
    onSuccess: (data) => {
      setSummary(data.summary);
    },
    onError: (error: Error) => {
      console.error("Error fetching AI summary:", error.message);
    },
  });

  const handleClick = () => {
    if (meetingId) {
      mutation.mutate();
    } else {
      console.error("No meetingId provided");
    }
  };

  return (
    <>
      <section className="mt-20">
        <button
          className="btn btn-primary hover:btn-active shadow-lg btn-lg w-52"
          onClick={handleClick}
          disabled={mutation.isPending}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>

          {mutation.isPending ? "Summarizing..." : "Summarize AI"}
        </button>
        {mutation.isError && (
          <p className="text-error">Error: {mutation.error?.message}</p>
        )}
        {summary && (
          <div className="mt-10 bg-black rounded ms-60 me-60 p-10">
            <h3 className="text-lg text-left text-white">Summary of points:</h3>
            <br />
            <div className="text-white text-left mt-4 whitespace-pre-wrap">
              {summary}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
