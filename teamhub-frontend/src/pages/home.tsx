import TimeLine from "../components/timeLine";
import Navbar from "../components/navbar";
import ContributeCard from "../components/Cards/contributeCard";
import MeetingCard from "../components/Cards/meetingCard";
import ArchiveCard from "../components/Cards/archiveCard";
import TrackerWidget from "../components/trackerWidget";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-black p-5 mt-10 mb-5">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-white">
          SyncSpace
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-white">
          We help small businesses and startups to manage and summarize issues
          effortlessly, ensuring every meeting is organized and productive.
          Simplify your workflow and focus on what matters most with a smart
          meeting board designed for your needs.
        </p>
      </section>

      <section className="flex justify-center align-middle">
        <ContributeCard />
        <MeetingCard />
        <ArchiveCard />
      </section>
      <section className="flex justify-center align-middle mt-20 bg-stone-900 p-20">
        <TimeLine />
        <TrackerWidget />
      </section>
      <Footer />
    </>
  );
}
