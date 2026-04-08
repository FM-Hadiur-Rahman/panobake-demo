import { Warehouse, AlertTriangle, Package2, Snowflake } from "lucide-react";

const stockItems = [
  {
    id: "ST-1",
    product: "Tiefkühl-Brötchen",
    stock: 1200,
    unit: "Stk",
    zone: "TK-Lager A1",
  },
  {
    id: "ST-2",
    product: "Croissants",
    stock: 140,
    unit: "Stk",
    zone: "TK-Lager A2",
  },
  {
    id: "ST-3",
    product: "Pizza-Teiglinge",
    stock: 650,
    unit: "Stk",
    zone: "TK-Lager B1",
  },
  {
    id: "ST-4",
    product: "Laugenstangen",
    stock: 90,
    unit: "Stk",
    zone: "TK-Lager B3",
  },
  {
    id: "ST-5",
    product: "Mini-Baguettes",
    stock: 320,
    unit: "Stk",
    zone: "TK-Lager C1",
  },
];

export default function WarehousePage() {
  const getStockClass = (stock) => {
    if (stock <= 100) return "text-red-700 bg-red-100 border-red-200";
    if (stock <= 150) return "text-amber-700 bg-amber-100 border-amber-200";
    return "text-emerald-700 bg-emerald-100 border-emerald-200";
  };

  const getStockLabel = (stock) => {
    if (stock <= 100) return "Kritisch";
    if (stock <= 150) return "Niedrig";
    return "Stabil";
  };

  const lowStock = stockItems.filter((item) => item.stock <= 150);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Lagerverwaltung</h2>
        <p className="mt-1 text-slate-600">
          Bestände, Lagerzonen und kritische Mengen auf einen Blick.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Lagerzonen</p>
            <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
              <Warehouse className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">8</p>
        </div>

        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">TK-Produkte</p>
            <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
              <Snowflake className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">42</p>
        </div>

        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Warnungen</p>
            <div className="rounded-2xl bg-red-50 p-3 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">{lowStock.length}</p>
        </div>
      </div>

      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
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

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lowStock.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-black/5 bg-slate-50 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-slate-900">{item.product}</p>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${getStockClass(
                    item.stock,
                  )}`}
                >
                  {getStockLabel(item.stock)}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Zone: {item.zone}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Bestand: {item.stock} {item.unit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Produkt</th>
                <th className="px-6 py-4 font-medium">Lagerzone</th>
                <th className="px-6 py-4 font-medium">Bestand</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {stockItems.map((item) => (
                <tr key={item.id} className="border-t border-black/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-orange-50 p-2 text-[#e86f1d]">
                        <Package2 className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-slate-900">
                        {item.product}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{item.zone}</td>
                  <td className="px-6 py-4 text-slate-700">
                    {item.stock} {item.unit}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${getStockClass(
                        item.stock,
                      )}`}
                    >
                      {getStockLabel(item.stock)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
