import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostsForMeeting from "../components/postsForMeeting";
import MeetingUpdates from "../components/meetingUpdates";

export default function Meeting() {
  return (
    <>
      <Navbar />
      <section>
        <button className="btn btn-primary btn-lg">Summarise AI</button>
      </section>

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
