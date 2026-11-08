export default function Marquee({ items, green = false, speed = 22 }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${green ? 'marquee--green' : ''}`} aria-hidden="true">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {row.map((item, i) => (
          <span key={i}>{item} ✦</span>
        ))}
      </div>
    </div>
  );
}
