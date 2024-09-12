import { Link } from "react-router-dom";

export default function ArchiveCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-6">
      <figure className="max-h-60">
        <img src="../src/assets/colour.jpg" alt="Title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl text-left">Review Past Meetings</h2>
        <p className="text-left text-sm">
          Recap key decisions, overview by category, move forward with intention
        </p>
        <div className="card-actions justify-end">
          <Link to={"./archive"}>
            <button className="btn btn-primary w-28">Review</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
