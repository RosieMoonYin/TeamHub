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

  console.table(data);

  return (
    <>
      <div className="flex flex-wrap justify-center m-5 mt-20">
        {data?.length === 0 ? (
          <p>No open meetings available.</p>
        ) : (
          data?.map((openMeeting) => {
            // const postCount = openMeeting.posts?.length ?? 0;

            return (
              <div
                key={openMeeting.id}
                className="card bg-secondary text-primary-content w-96 m-2 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <div className="card-body">
                  {openMeeting.postCount < 5 && (
                    <div className="badge badge-error text-left text-xs">
                      Contributions: {openMeeting.postCount}
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
                        // disabled={postCount < 4}
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
