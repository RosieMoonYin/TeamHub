import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeetingList from "../components/meetingList";

export default function Archive() {
  return (
    <>
      <Navbar />

      <h2>Meeting Archives Search Issues</h2>
      <p>Display Past Meetings and Search old issues</p>

      <MeetingList />

      <Link to="/">
        <button className="btn m-10">Home</button>
      </Link>

      <Footer />
    </>
  );
}
