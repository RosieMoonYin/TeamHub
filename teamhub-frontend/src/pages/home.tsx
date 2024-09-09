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

      <h1>SyncSpace</h1>
      <p>The Meeting Board</p>

      <section className="flex justify-center">
        <ContributeCard />
        <MeetingCard />
        <ArchiveCard />
      </section>
      <TimeLine />
      <TrackerWidget />

      <Footer />
    </>
  );
}
