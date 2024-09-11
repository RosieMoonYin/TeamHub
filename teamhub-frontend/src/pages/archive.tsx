import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeetingListArchive from "../components/meetingListArchive";
import PostsMeeting from "../components/postsForMeeting";

export default function Archive() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col align-middle m-20">
        <MeetingListArchive />
        <PostsMeeting />
      </section>
      <Footer />
    </>
  );
}
