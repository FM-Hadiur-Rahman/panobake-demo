import { X, Mail, Phone, ShoppingBag, FileText } from "lucide-react";

export default function CustomerDetailModal({ customer, onClose }) {
  if (!customer) return null;

  const demoOrders = [
    {
      id: "AUF-1045",
      date: "07.04.2026",
      amount: "1.420 €",
      status: "Geliefert",
    },
    {
      id: "AUF-1018",
      date: "28.03.2026",
      amount: "980 €",
      status: "Geliefert",
    },
    { id: "AUF-0982", date: "14.03.2026", amount: "760 €", status: "Bezahlt" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-3xl rounded-[28px] bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {customer.name}
            </h3>
            <p className="mt-1 text-slate-600">{customer.type}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl bg-slate-100 p-3 text-slate-600 hover:bg-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="h-4 w-4" />
              <span className="font-medium">E-Mail</span>
            </div>
            <p className="mt-2 text-slate-600">{customer.email}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Telefon</span>
            </div>
            <p className="mt-2 text-slate-600">{customer.phone}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <ShoppingBag className="h-4 w-4" />
              <span className="font-medium">Letzte Bestellung</span>
            </div>
            <p className="mt-2 text-slate-600">{customer.lastOrder}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <FileText className="h-4 w-4" />
              <span className="font-medium">Gesamtumsatz</span>
            </div>
            <p className="mt-2 text-slate-600">{customer.totalSpent}</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-slate-900">
            Bestellhistorie
          </h4>
          <div className="mt-4 space-y-3">
            {demoOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-2 rounded-2xl border border-black/5 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-900">{order.id}</p>
                  <p className="text-sm text-slate-500">{order.date}</p>
                </div>
                <div className="text-slate-700">{order.amount}</div>
                <div className="text-sm font-medium text-emerald-700">
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
