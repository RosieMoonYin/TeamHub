export default function ContributeCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-4">
      <figure>
        <img src=".../assets/colour.jpg" alt="Title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Contribute to meeting</h2>
        <p className="text-left">
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
