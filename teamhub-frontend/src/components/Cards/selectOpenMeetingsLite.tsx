import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchOpenMeetings, Meeting } from "../api";

export default function SelectOpenMeetingLite() {
  const { data, isLoading, isError, error } = useQuery<Meeting[], Error>({
    queryKey: ["openMeetings"],
    queryFn: fetchOpenMeetings,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex justify-center m-5 mt-40">
        {data?.length === 0 ? (
          <p>No open meetings available.</p>
        ) : (
          data?.map((openMeeting) => {
            const postCount = openMeeting.posts?.length ?? 0;

            return (
              <div
                key={openMeeting.id}
                className="card bg-secondary text-primary-content w-96 m-2 mb-4"
              >
                <div className="card-body">
                  {postCount < 5 && (
                    <div className="badge badge-error text-left text-xs">
                      Contributions: {postCount}
                    </div>
                  )}

                  <h2 className="card-title text-2xl">
                    {openMeeting.meetingName}
                  </h2>
                  <p className="text-left text-slate-100">
                    {openMeeting.description}
                  </p>

                  <div className="card-actions justify-end">
                    <Link to="/meeting" state={{ meetingId: openMeeting.id }}>
                      <button
                        className="btn btn-info btn-s"
                        disabled={postCount < 4}
                      >
                        Open Meeting
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
