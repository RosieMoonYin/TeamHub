import TimeLine from "../components/timeLine";
import Navbar from "../components/navbar";
import ContributeCard from "../components/Cards/contributeCard";
import MeetingCard from "../components/Cards/meetingCard";
import ArchiveCard from "../components/Cards/archiveCard";
import TrackerWidget from "../components/trackerWidget";
import Footer from "../components/footer";

import { Button } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <Button gradientMonochrome="info">Info</Button>
      <Button gradientMonochrome="teal">Teal</Button>

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
