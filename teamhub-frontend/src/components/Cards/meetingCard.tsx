import { Link } from "react-router-dom";

export default function MeetingCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-6">
      <figure className="max-h-60">
        <img src="../src/assets/colour.jpg" alt="Title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl text-left">Start a Meeting Now</h2>
        <p className="text-left text-sm">
          Your meeting space All voices clarified, summarised, prioritised
        </p>
        <div className="card-actions justify-end">
          <Link to="/selectmeetingLite">
            <button className="btn btn-primary w-28">Open</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
