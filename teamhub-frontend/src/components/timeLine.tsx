export default function TimeLine() {
  return (
    <ul className="steps">
      <li className="step step-info">Create meeting, or choose existing</li>
      <li className="step step-info">Add issues to meeting</li>
      <li className="step step-info">Open meeting to view sumarized issues</li>
      <li className="step step-error" data-content="?">
        Close meeting with AI summary and key action points
      </li>
    </ul>
  );
}
