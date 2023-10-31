import "./Header.css";

export default function Header() {
  var options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
  return (
    <div className="Header">
      <h1>{new Date().toLocaleDateString("ko-KR", options)}</h1>
    </div>
  );
}