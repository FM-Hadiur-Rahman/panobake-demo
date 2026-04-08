export default function HeroMiniCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-orange-100">{label}</p>
        <Icon className="h-5 w-5 text-orange-200" />
      </div>
      <p className="mt-3 text-base font-semibold">{value}</p>
    </div>
  );
}
