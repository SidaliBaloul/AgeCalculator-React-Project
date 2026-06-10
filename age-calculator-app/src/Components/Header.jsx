import "../Styles/MyStyles.css";

export default function Header() {
  const date = new Date();

  const formatted = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="header">
      <div className="title">
        <h1>📅 Age Calculator</h1>
        <p>Enter your birth date, then calculate your exact age.</p>
      </div>

      <div class="chip" id="todayChip">
        Today: {formatted}
      </div>
    </div>
  );
}
