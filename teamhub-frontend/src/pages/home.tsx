import { Link } from "react-router-dom";
import TimeLine from "../components/timeLine";
import Navbar from "../components/navbar";

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

      <TimeLine />
    </>
  );
}
