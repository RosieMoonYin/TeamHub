import { Link } from "react-router-dom";
import TimeLine from "../components/timeLine";
import Navbar from "../components/navbar";
import ContributeCard from "../components/Cards/contributeCard";
import MeetingCard from "../components/Cards/meetingCard";
import ArchiveCard from "../components/Cards/archiveCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>SyncSpace</h1>
      <p>The Meeting Board</p>

      <Link to="/contribute">
        <button className="btn m-2">Contribute</button>
      </Link>
      <Link to="/meeting">
        <button className="btn m-2">Open Meeting</button>
      </Link>
      <Link to="/archive">
        <button className="btn m-2">Archive</button>
      </Link>

      <section className="flex justify-center">
        <ContributeCard />
        <MeetingCard />
        <ArchiveCard />
      </section>
      <TimeLine />
    </>
  );
}
