import { useQuery } from "@tanstack/react-query";
import { fetchClosedMeetings, Meeting } from "./api";

export default function MeetingListArchive() {
  const { data, error, isLoading } = useQuery<Meeting[], Error>({
    queryKey: ["closedMeetings"],
    queryFn: fetchClosedMeetings,
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
            <div className="collapse-title text-2xl font-medium">
              <label htmlFor={`accordion-${meeting.id}`}>
                {meeting.meetingName}
              </label>
            </div>
            <div className="collapse-content">
              <p className="text-left text-m text-slate-700 m-2">
                {meeting.description}
              </p>
              <p className="text-left text-m  text-slate-700 m-2">
                {meeting.summary}
              </p>

              {meeting.actionPoints && meeting.actionPoints.length > 0 && (
                <ul className="list-disc pl-5">
                  {meeting.actionPoints.map((point, index) => (
                    <li
                      key={index}
                      className="text-left text-m  text-purple-500 m-4"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-left">{meeting.aiSummary}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No meetings available</div>
      )}
    </>
  );
}
