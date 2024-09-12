export default function TrackerWidget() {
  return (
    <div className="stats stats-horizontal lg:stats-horizontal shadow outline outline-white border-solid h-28 bg-stone-900 flex ms-10 mt-20">
      <div className="stat">
        <div className="stat-title  text-white">Time Saved (Hours)</div>
        <div className="stat-value  text-white">30</div>
        <div className="stat-desc  text-white">Sept 1st - Nov 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title  text-white">Costs Reduced</div>
        <div className="stat-value  text-white">5,600kr</div>
        <div className="stat-desc  text-white">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title  text-white">Contributions</div>
        <div className="stat-value  text-white">1,200</div>
        <div className="stat-desc  text-white">↗︎ (30%)</div>
      </div>
    </div>
  );
}
