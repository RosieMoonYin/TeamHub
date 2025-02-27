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
      <div className="flex flex-wrap justify-center m-5 mt-20">
        {data?.length === 0 ? (
          <p>No open meetings available.</p>
        ) : (
          data?.map((openMeeting) => (
            <div
              key={openMeeting.id}
              className="card bg-secondary text-primary-content w-96 m-2 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div className="card-body">
                <h2 className="card-title text-2xl mb-2">
                  {openMeeting.meetingName}
                </h2>
                <p className="text-left text-teal-400 text-xs">
                  {new Date(openMeeting.meetingDate).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      // year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </p>

                <p className="text-left text-slate-200 mt-2">
                  {openMeeting.description}
                </p>
                <div className="card-actions justify-end">
                  <Link to="/contribute" state={{ meetingId: openMeeting.id }}>
                    <button className="btn btn-info btn-s">Contribute</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
