import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Archive() {
  return (
    <>
      <Navbar />
      <h2>Hello Meeting Archives</h2>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </>
  );
}
