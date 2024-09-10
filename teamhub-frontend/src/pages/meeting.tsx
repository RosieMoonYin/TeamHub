import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostsForMeeting from "../components/postsForMeeting";
import MeetingUpdates from "../components/meetingUpdates";

export default function Meeting() {
  return (
    <>
      <Navbar />

      <h2>Issues raised</h2>
      <h3>click summarize to generate meeting focus points</h3>
      <button className="btn btn-primary btn-lg">Summarise AI</button>
      <div className="flex flex-row">
        <section className="w-2/3 m-5">
          <PostsForMeeting />
        </section>

        <section className="w-1/3 m-5">
          <MeetingUpdates />
        </section>
      </div>
      <Footer />
    </>
  );
}
