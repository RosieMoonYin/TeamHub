import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeetingListArchive from "../components/meetingListArchive";
import SearchArchivePosts from "../components/searchArchivePosts";

export default function Archive() {
  return (
    <>
      <Navbar />
      <section className="bg-lime-200 p-5 mt-20 pb-10">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-black">
          Archived Meetings
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-black">
          <p className="text text-left m-20 ms-40 me-40 text-black">
            Reflecting on past decisions is key to forging a clear path forward.
            Together, we foster an environment where past experiences guide
            future innovations, driving progress and excellence in every
            endeavor.
          </p>
        </p>
      </section>
      <section className="flex flex-col align-middle justify-center m-20">
        <MeetingListArchive />
        <section className="bg-stone-900 p-5 mt-20 pb-10">
          <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-white">
            All voices heard
          </h1>
          <p className="text text-left m-20 ms-40 me-40 text-white">
            At TeamHub, we believe in the power of inclusive dialogue to drive
            progress and unity. Our platform is dedicated to ensuring that every
            voice is heard and valued, regardless of race, gender, or
            background. By fostering a collaborative environment where diverse
            perspectives are elevated and embraced, we empower teams to achieve
            their fullest potential. Together, we create a space where every
            individual contributes to meaningful change, advancing equity and
            understanding across all communities.
          </p>
        </section>
        <SearchArchivePosts />
      </section>
      <Footer />
    </>
  );
}
