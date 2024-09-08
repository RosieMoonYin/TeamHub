import { Link } from "react-router-dom";

export default function Meeting() {
  return (
    <>
      <h2>Hello Meeting Opened</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
