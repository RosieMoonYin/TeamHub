import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostsForMeeting from "../components/postsForMeeting";
import MeetingUpdates from "../components/meetingUpdates";
import SummaryButtonAI from "../components/summaryButtonAI";

export default function Meeting() {
  return (
    <>
      <Navbar />
      <section className="bg-black p-5 mt-10 mb-5">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-white">
          MeetingSpace
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-white">
          View and discuss all submitted posts, generate an AI-powered summary
          of key points, and add your own summary and actions to keep the
          momentum going. Stay on top of your team's priorities and make every
          meeting more productive.
        </p>
      </section>

      <div className="flex flex-col">
        <section className="m-5">
          <SummaryButtonAI />
        </section>
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
