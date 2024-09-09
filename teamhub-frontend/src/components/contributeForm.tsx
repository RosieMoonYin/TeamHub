export default function ContributeForm() {
  return (
    <>
      <div className="flex bg-gray-200 p-20">
        <section className="flex flex-col align-middle justify-center w-1/2 bg-slate-400 p-10 m-5">
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
            className="textarea textarea-primary textarea-lg text-s p-2 m-1 h-64"
            placeholder="Share your thoughts here"
          ></textarea>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center">Flag as urgent</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
          <button className="btn btn-primary w-40">Submit</button>
        </section>

        <section className="flex flex-col align-middle justify-center w-1/2 bg-slate-400 p-10 m-5">
          <p>Here Fetch ready done posts!</p>
        </section>
      </div>
    </>
  );
}
