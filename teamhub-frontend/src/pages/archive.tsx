import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useQuery } from "@tanstack/react-query";
import { fetchMeetings, Meeting } from "../components/api";

export default function Archive() {
  const { data, error, isLoading } = useQuery<Meeting[], Error>({
    queryKey: ["meetings"],
    queryFn: fetchMeetings,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Navbar />
      <h2>Meeting Archives Get All Meetings</h2>
      <p>Component to display meetings</p>

      <ul>
        {data?.map((meeting) => <li key={meeting.id}>{meeting.title}</li>)}
      </ul>

      <Link to="/">
        <button className="btn">Home</button>
      </Link>

      <Footer />
    </>
  );
}
