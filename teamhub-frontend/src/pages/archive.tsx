import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeetingListArchive from "../components/meetingListArchive";
import PostsForArchive from "../components/postsForArchive";
import SearchArchivePosts from "../components/searchArchivePosts";

export default function Archive() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col align-middle justify-center m-20">
        <MeetingListArchive />
        <SearchArchivePosts />
        <PostsForArchive />
      </section>
      <Footer />
    </>
  );
}
