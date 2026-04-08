import {
  X,
  Mail,
  Phone,
  ShoppingBag,
  FileText,
  Building2,
  MapPin,
  BadgeEuro,
} from "lucide-react";

export default function CustomerDetailModal({ customer, onClose, badge }) {
  if (!customer) return null;

  const customerOrders = [
    {
      id: "AUF-1045",
      date: "07.04.2026",
      amount: "1.420 €",
      status: "Geliefert",
      products: "Tiefkühl-Brötchen, Croissants, Pizza-Teiglinge",
    },
    {
      id: "AUF-1018",
      date: "28.03.2026",
      amount: "980 €",
      status: "Geliefert",
      products: "Laugenstangen, Mini-Baguettes",
    },
    {
      id: "AUF-0982",
      date: "14.03.2026",
      amount: "760 €",
      status: "Bezahlt",
      products: "Buttercroissants, Brotlinge",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-5xl rounded-[30px] bg-white p-6 shadow-2xl lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[#e86f1d]">
              Kundenprofil
            </div>
            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              {customer.name}
            </h3>
            <p className="mt-1 text-slate-600">{customer.type}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl bg-slate-100 p-3 text-slate-600 transition hover:bg-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard icon={Mail} label="E-Mail" value={customer.email} />
          <InfoCard icon={Phone} label="Telefon" value={customer.phone} />
          <InfoCard
            icon={ShoppingBag}
            label="Letzte Bestellung"
            value={customer.lastOrder}
          />
          <InfoCard
            icon={BadgeEuro}
            label="Gesamtumsatz"
            value={customer.totalSpent}
          />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[26px] border border-black/5 bg-slate-50 p-5">
            <h4 className="text-xl font-semibold text-slate-900">
              Bestellhistorie
            </h4>
            <div className="mt-4 space-y-3">
              {customerOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-2xl border border-black/5 bg-white p-4"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{order.id}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {order.date}
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        {order.products}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-2 md:items-end">
                      <span className="font-semibold text-slate-900">
                        {order.amount}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs ${badge(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[26px] border border-black/5 bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-[#e86f1d]" />
                <h4 className="text-lg font-semibold">Kundenübersicht</h4>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-medium">Kundennummer:</span>{" "}
                  {customer.id}
                </p>
                <p>
                  <span className="font-medium">Kundentyp:</span>{" "}
                  {customer.type}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${badge(
                      customer.status,
                    )}`}
                  >
                    {customer.status}
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-[26px] border border-black/5 bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#e86f1d]" />
                <h4 className="text-lg font-semibold">Notizen / Potenzial</h4>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Wichtiger Geschäftskunde mit wiederkehrenden Bestellungen.
                Geeignet für Standardbestellungen, Rahmenvereinbarungen und
                bevorzugte Lieferplanung.
              </p>
            </div>

            <div className="rounded-[26px] border border-orange-200 bg-orange-50 p-5">
              <h4 className="text-lg font-semibold text-slate-900">
                Schnelle Aktionen
              </h4>
              <div className="mt-4 grid gap-3">
                <button className="rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium shadow-sm">
                  Neue Bestellung für Kunden anlegen
                </button>
                <button className="rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium shadow-sm">
                  Rechnung erstellen
                </button>
                <button className="rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium shadow-sm">
                  E-Mail senden
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-[22px] border border-black/5 bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-slate-600">
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
