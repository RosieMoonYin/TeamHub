import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Archive() {
  return (
    <>
      <Navbar />
      <h2>Meeting Archives Get All Meetings</h2>
      <p>Component to display meetings</p>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </>
  );
}
