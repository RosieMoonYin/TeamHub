import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import ContributeForm from "../components/contributeForm";

export default function Contribute() {
  return (
    <>
      <Navbar />
      <h2>Hello Input Form Page</h2>
      <ContributeForm />
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
    </>
  );
}
