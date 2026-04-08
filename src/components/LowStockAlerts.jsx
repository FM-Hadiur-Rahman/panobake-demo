import { AlertTriangle } from "lucide-react";

export default function LowStockAlerts({ products = [] }) {
  const lowStockItems = products.filter((item) => item.stock <= 150);

  if (!lowStockItems.length) return null;

  const getCardClass = (stock) => {
    if (stock <= 100) {
      return "border-red-200 bg-red-50 text-red-800";
    }
    return "border-amber-200 bg-amber-50 text-amber-800";
  };

  const getLabel = (stock) => {
    if (stock <= 100) return "Kritisch";
    return "Niedrig";
  };

  return (
    <div className="rounded-[28px] border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-red-50 p-3 text-red-600">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Warnung: Niedriger Lagerbestand
          </h3>
          <p className="text-sm text-slate-600">
            Diese Produkte sollten bald geprüft oder nachproduziert werden.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lowStockItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl border p-4 ${getCardClass(item.stock)}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold">{item.name}</p>
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium">
                {getLabel(item.stock)}
              </span>
            </div>

            <p className="mt-2 text-sm opacity-80">
              Kategorie: {item.category}
            </p>
            <p className="mt-1 text-sm font-medium">
              Bestand: {item.stock} {item.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
