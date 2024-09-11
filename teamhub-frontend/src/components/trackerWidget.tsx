export default function TrackerWidget() {
  return (
    // <div className="stats shadow">
    //   <div className="stat">
    //     <div className="stat-title">Total Contributions this month</div>
    //     <div className="stat-value">132</div>
    //     <div className="stat-desc">21% more than last month</div>
    //   </div>
    // </div>

    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">Time Saved (Hours)</div>
        <div className="stat-value">30</div>
        <div className="stat-desc">Sept 1st - Nov 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title">Costs Reduced</div>
        <div className="stat-value">5,600kr</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title">Contributions</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↗︎ (30%)</div>
      </div>
    </div>
  );
}
