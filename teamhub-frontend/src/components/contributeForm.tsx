import PostsChat from "./postsChat";

export default function ContributeForm() {
  return (
    <>
      <div className="flex bg-gray-200 p-20">
        <section className="flex flex-col align-middle justify-center w-1/2 bg-slate-50 p-10 m-5">
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
            className="textarea textarea-primary textarea-lg text-s p-3 m-1 h-64 w-full"
            placeholder="Share your thoughts here"
          ></textarea>

          <div className="form-control flex justify-start">
            <label className="label cursor-pointer flex">
              <p className="label-text">Flag as urgent</p>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
          <button className="btn btn-primary w-40 m-1">Submit</button>
        </section>

        <section className="flex flex-col align-middle justify-center w-1/2 bg-slate-100 p-10 m-5">
          <PostsChat />
        </section>
      </div>
    </>
  );
}
