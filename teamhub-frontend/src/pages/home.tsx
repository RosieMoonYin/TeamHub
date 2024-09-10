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

      <h1 className="text-5xl m-5 mt-20">SyncSpace</h1>
      <p className="text m-20 text-center ms-40 me-40">
        We help small businesses and startups to manage and summarize issues
        effortlessly, ensuring every meeting is organized and productive.
        Simplify your workflow and focus on what matters most with a smart
        meeting board designed for your needs. Get started CREATE CONTRIBUTE
      </p>

      <section className="flex justify-center">
        <ContributeCard />
        <MeetingCard />
        <ArchiveCard />
      </section>

      <section>
        <h1> Add New Meeting </h1>
      </section>
      <TimeLine />
      <TrackerWidget />

      <Footer />
    </>
  );
}
