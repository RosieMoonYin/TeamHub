export default function ContributeForm() {
  return (
    <>
      <div className="flex">
        <section className="flex flex-col align-middle justify-center w-1/2">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-primary w-full max-w-xs m-1"
          />

          <select className="select select-primary w-full max-w-xs m-1">
            <option disabled selected>
              Choose a category
            </option>
            <option>Concern</option>
            <option>Question</option>
            <option>Suggestion</option>
          </select>

          <textarea
            className="textarea textarea-primary textarea-lg text-xs p-2 m-1"
            placeholder="Share your thoughts here"
          ></textarea>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Flag as urgent</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
          <button className="btn btn-primary w-40">Submit</button>
        </section>

        <section className="flex flex-col align-middle justify-center w-1/2">
          <p>Here Fetch ready done posts!</p>
        </section>
      </div>
    </>
  );
}
