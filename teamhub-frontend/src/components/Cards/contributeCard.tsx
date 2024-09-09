import { Link } from "react-router-dom";

export default function ContributeCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-6">
      <figure className="max-h-60">
        <img src="../src/assets/colour.jpg" alt="Title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl text-left">Contribute to meeting</h2>
        <p className="text-left text-sm">
          Have a topic to raise? Create a contribution and make sure your voice
          is heard!
        </p>
        <div className="card-actions justify-end">
          <Link to="/contribute">
            <button className="btn btn-primary">Contribute</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
