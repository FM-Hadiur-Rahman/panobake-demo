import { useMemo } from "react";
import { Search, Plus, Eye } from "lucide-react";
import { customers } from "../data/demoData";

export default function CustomersPage({ search, setSearch, badge }) {
  const filteredCustomers = useMemo(() => {
    return customers.filter((c) =>
      [c.name, c.email, c.phone, c.id, c.type]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Kundenverwaltung</h3>
          <p className="text-slate-600">
            Alle Kundeninformationen, Kontakte und Bestellhistorie an einem Ort.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Kunden suchen"
              className="bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
            <Plus className="h-4 w-4" /> Kunde hinzufügen
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Kunde</th>
                <th className="px-6 py-4 font-medium">Typ</th>
                <th className="px-6 py-4 font-medium">Telefon</th>
                <th className="px-6 py-4 font-medium">Letzte Bestellung</th>
                <th className="px-6 py-4 font-medium">Umsatz</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Aktion</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-t border-black/5">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold">{customer.name}</p>
                      <p className="text-slate-500">{customer.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{customer.type}</td>
                  <td className="px-6 py-4 text-slate-700">{customer.phone}</td>
                  <td className="px-6 py-4 text-slate-700">
                    {customer.lastOrder}
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {customer.totalSpent}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${badge(customer.status)}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="inline-flex items-center gap-2 rounded-xl border border-black/5 bg-slate-50 px-3 py-2 text-xs">
                      <Eye className="h-4 w-4" /> Anzeigen
                    </button>
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
