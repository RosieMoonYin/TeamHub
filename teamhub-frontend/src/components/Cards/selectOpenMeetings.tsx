import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchOpenMeetings, Meeting } from "../api";

export default function SelectOpenMeeting() {
  const { data, isLoading, isError, error } = useQuery<Meeting[], Error>({
    queryKey: ["openMeetings"],
    queryFn: fetchOpenMeetings,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      {data?.length === 0 ? (
        <p>No open meetings available.</p>
      ) : (
        data?.map((openMeeting) => (
          <div
            key={openMeeting.id}
            className="card bg-secondary text-primary-content w-96 mb-4"
          >
            <div className="card-body">
              <h2 className="card-title">{openMeeting.meetingName}</h2>
              <p>{openMeeting.description}</p>
              <div className="card-actions justify-end">
                <Link to="/contribute" state={{ meetingId: openMeeting.id }}>
                  <button className="btn btn-primary btn-s">Contribute</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
