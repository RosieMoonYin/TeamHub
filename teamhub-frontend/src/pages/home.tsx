import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>SyncSpace</h1>
      <p>The Meeting Board</p>

      <Link to="/contribute">
        <button>Contribute</button>
      </Link>
      <Link to="/meeting">
        <button>Open Meeting</button>
      </Link>
      <Link to="/archive">
        <button>Archive</button>
      </Link>
    </>
  );
}
