import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostsForMeeting from "../components/postsForMeeting";
import MeetingUpdates from "../components/meetingUpdates";
import SummaryButtonAI from "../components/summaryButtonAI";

export default function Meeting() {
  return (
    <>
      <Navbar />

      <SummaryButtonAI />

      <div className="flex flex-col">
        <section className="m-5">
          <PostsForMeeting />
        </section>
        <section className="m-5">
          <MeetingUpdates />
        </section>
      </div>
      <Footer />
    </>
  );
}
