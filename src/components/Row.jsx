export default function Row({ label, value, bold = false }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-slate-500">{label}</span>
      <span
        className={
          bold ? "font-bold text-slate-900" : "font-medium text-slate-800"
        }
      >
        {value}
      </span>
    </div>
  );
}
