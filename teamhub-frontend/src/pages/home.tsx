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

      <h1 className="text-4xl m-5">Streamline your meetings with ease</h1>
      <p className="text m-10">
        Sync Spaces helps small businesses and startups manage and summarize
        issues effortlessly, ensuring every meeting is organized and productive.
        Simplify your workflow and focus on what matters most with a smart
        meeting board designed for your needs.
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
