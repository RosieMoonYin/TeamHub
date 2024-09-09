import { useQuery } from "@tanstack/react-query";
import { fetchMeetings, Meeting } from "../components/api";

export default function MeetingList() {
  const { data, error, isLoading } = useQuery<Meeting[], Error>({
    queryKey: ["meetings"],
    queryFn: fetchMeetings,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      {data && data.length > 0 ? (
        data.map((meeting) => (
          <div className="collapse collapse-arrow bg-base-200" key={meeting.id}>
            <input
              type="radio"
              name="my-accordion"
              id={`accordion-${meeting.id}`}
            />
            <div className="collapse-title text-xl font-medium">
              <label htmlFor={`accordion-${meeting.id}`}>
                {meeting.meetingName}
              </label>
            </div>
            <div className="collapse-content">
              <p>{meeting.description}</p>
              <p>{meeting.summary} SUMMARY WILL GO HERE!</p>
            </div>
          </div>
        ))
      ) : (
        <div>No meetings available</div>
      )}
    </>
  );
}
