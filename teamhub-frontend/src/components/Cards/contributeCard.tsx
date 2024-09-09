export default function ContributeCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Title"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Contribute to meeting</h2>
        <p>
          Have a topic to raise? Create a contribution and make sure your voice
          is heard!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Contribute</button>
        </div>
      </div>
    </div>
  );
}
