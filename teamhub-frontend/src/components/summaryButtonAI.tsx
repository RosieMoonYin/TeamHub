import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchAISummary } from "./api";

export default function SummaryButtonAI() {
  const location = useLocation();
  const meetingId = location.state?.meetingId;

  const mutation = useMutation({
    mutationFn: () => fetchAISummary(meetingId),
    onSuccess: (data) => {
      console.log("AI Summary fetched successfully", data);
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
        {mutation.isSuccess && (
          <p className="text-success">
            Summary: {JSON.stringify(mutation.data)}
          </p>
        )}
      </section>
    </>
  );
}
