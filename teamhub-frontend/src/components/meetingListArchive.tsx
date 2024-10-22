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
      <section className="m-20">
        {data && data.length > 0 ? (
          data.map((meeting) => (
            <div
              className="collapse collapse-arrow bg-inherit border-2 border-lime-200 m-1 p-2"
              key={meeting.id}
            >
              <input
                type="radio"
                name="my-accordion"
                id={`accordion-${meeting.id}`}
              />
              <div className="collapse-title ">
                <p className="text-right text-stone-600 text-xs m-1">
                  {new Date(meeting.meetingDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

                <div className="text-5xl mb-4 text-left">
                  <label htmlFor={`accordion-${meeting.id}`}>
                    {meeting.meetingName}
                  </label>
                </div>
                <p className="text-left">{meeting.description}</p>
              </div>

              <div className="collapse-content">
                <p className="text-left text-m  text-slate-700 m-2 p-4">
                  {meeting.summary}
                </p>

                {meeting.actionPoints && meeting.actionPoints.length > 0 && (
                  <ul className="list-disc pl-5">
                    {meeting.actionPoints.map((point, index) => (
                      <li
                        key={index}
                        className="text-left text-m  text-slate-700 m-4 ms-20"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No meetings available</div>
        )}
      </section>
    </>
  );
}
