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
      <section>
        <button
          className="btn btn-primary btn-lg"
          onClick={handleClick}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Summarizing..." : "Summarize AI"}
        </button>
        {mutation.isError && (
          <p className="text-error">Error: {mutation.error?.message}</p>
        )}
        {summary && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="text-lg font-bold">AI Summary:</h3>
            <p>{summary}</p>
          </div>
        )}
      </section>
    </>
  );
}
