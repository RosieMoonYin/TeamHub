import { Link } from "react-router-dom";

export default function SelectOpenMeeting() {
  return (
    <>
      <div className="card bg-secondary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to="/contribute">
              <button className="btn btn-primary">Contribute</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1>Input Form to add meeting</h1>
      </div>
    </>
  );
}
