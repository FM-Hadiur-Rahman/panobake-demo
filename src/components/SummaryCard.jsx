export default function SummaryCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        <div className="rounded-2xl bg-orange-50 p-3 text-[#e86f1d]">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-5 text-3xl font-bold">{value}</p>
    </div>
  );
}
