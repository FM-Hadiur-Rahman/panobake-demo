import { useMemo, useState } from "react";
import { Plus, Search, Package, AlertTriangle } from "lucide-react";
import LowStockAlerts from "../components/LowStockAlerts";

const demoProducts = [
  {
    id: "PR-1001",
    name: "Tiefkühl-Brötchen",
    category: "TK Backwaren",
    sku: "PAN-TKB-001",
    price: 0.5,
    stock: 1200,
    unit: "Stk",
    status: "Auf Lager",
  },
  {
    id: "PR-1002",
    name: "Croissants",
    category: "TK Backwaren",
    sku: "PAN-CRO-002",
    price: 0.8,
    stock: 140,
    unit: "Stk",
    status: "Niedrig",
  },
  {
    id: "PR-1003",
    name: "Pizza-Teiglinge",
    category: "Teigprodukte",
    sku: "PAN-PIZ-003",
    price: 1.2,
    stock: 650,
    unit: "Stk",
    status: "Auf Lager",
  },
  {
    id: "PR-1004",
    name: "Laugenstangen",
    category: "Snacks",
    sku: "PAN-LAU-004",
    price: 0.75,
    stock: 90,
    unit: "Stk",
    status: "Kritisch",
  },
  {
    id: "PR-1005",
    name: "Mini-Baguettes",
    category: "Brot",
    sku: "PAN-MBG-005",
    price: 1.1,
    stock: 320,
    unit: "Stk",
    status: "Auf Lager",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return demoProducts.filter((product) =>
      [product.name, product.category, product.sku]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Auf Lager":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Niedrig":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Kritisch":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Produkte</h2>
          <p className="mt-1 text-slate-600">
            Verwalten Sie Produkte, Preise, Kategorien und Lagerbestände
            zentral.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Plus className="h-4 w-4" />
          Produkt hinzufügen
        </button>
      </div>

      <LowStockAlerts products={demoProducts} />

      <div className="rounded-[28px] border border-black/5 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Produkt suchen"
              className="bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-500">
            <Package className="h-4 w-4" />
            {filteredProducts.length} Produkte gefunden
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-4 font-medium">Produkt</th>
                <th className="px-5 py-4 font-medium">Kategorie</th>
                <th className="px-5 py-4 font-medium">SKU</th>
                <th className="px-5 py-4 font-medium">Preis</th>
                <th className="px-5 py-4 font-medium">Bestand</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Aktion</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-t border-black/5">
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {product.name}
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {product.category}
                  </td>
                  <td className="px-5 py-4 text-slate-500">{product.sku}</td>
                  <td className="px-5 py-4 text-slate-700">
                    {product.price.toFixed(2)} €
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {product.stock} {product.unit}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusClass(
                        product.status,
                      )}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="rounded-xl border border-black/5 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100">
                      Bearbeiten
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4" />
            <p>
              Produkte mit niedrigem oder kritischem Bestand sollten frühzeitig
              nachproduziert oder nachgeplant werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
