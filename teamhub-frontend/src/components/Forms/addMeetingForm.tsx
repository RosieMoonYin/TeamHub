import { Link } from "react-router-dom";

export default function AddMeetingForm() {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Meeting name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Brief description"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <label htmlFor="birthdaytime">Meeting (date and time):</label>
        <input
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <Link to="/">
          <button className="btn btn-accent bg-slate-400 w-40 m-1">
            Go Back
          </button>
        </Link>

        <button type="submit" className="btn btn-primary w-40 m-1">
          Create
        </button>
      </form>
    </>
  );
}
