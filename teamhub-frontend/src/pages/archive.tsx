import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeetingList from "../components/meetingList";
import PostsMeeting from "../components/postsForMeeting";

export default function Archive() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col align-middle m-20">
        <MeetingList />
        <PostsMeeting />
      </section>
      <p>Display Past Meetings and Search posts archive</p>
      <Footer />
    </>
  );
}
