import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Meeting() {
  return (
    <>
      <Navbar />
      <h2>Hello Meeting Opened</h2>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </>
  );
}
