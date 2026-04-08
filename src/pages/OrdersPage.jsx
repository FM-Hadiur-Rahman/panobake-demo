import { Plus, Clock3, AlertCircle, CheckCircle2 } from "lucide-react";
import { orders } from "../data/demoData";
import SummaryCard from "../components/SummaryCard";

export default function OrdersPage({ badge }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Bestellverwaltung</h3>
          <p className="text-slate-600">
            Verfolgen Sie alle Bestellungen, Lieferstatus und Umsätze in
            Echtzeit.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Plus className="h-4 w-4" /> Bestellung anlegen
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard title="Offen" value="16" icon={Clock3} />
        <SummaryCard title="In Bearbeitung" value="28" icon={AlertCircle} />
        <SummaryCard title="Geliefert" value="1.204" icon={CheckCircle2} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">{order.id}</p>
                <p className="mt-1 text-slate-500">Kunde: {order.customer}</p>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs ${badge(order.status)}`}
              >
                {order.status}
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              {order.products}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-500">Positionen</p>
                <p className="mt-2 font-semibold">{order.items}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-500">Gesamt</p>
                <p className="mt-2 font-semibold">{order.total}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-500">Datum</p>
                <p className="mt-2 font-semibold">{order.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
