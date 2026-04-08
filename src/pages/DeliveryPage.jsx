import { Truck, Clock3, CheckCircle2, MapPin, Plus } from "lucide-react";

const deliveries = [
  {
    id: "LIEF-5001",
    customer: "REWE Markt Köln",
    driver: "Ali Khan",
    route: "Mülheim → Köln",
    eta: "45 Min",
    status: "Unterwegs",
    date: "08.04.2026",
  },
  {
    id: "LIEF-5002",
    customer: "EDEKA Düsseldorf",
    driver: "Nihal",
    route: "Mülheim → Düsseldorf",
    eta: "Abgeschlossen",
    status: "Geliefert",
    date: "08.04.2026",
  },
  {
    id: "LIEF-5003",
    customer: "Hotel Rheinblick",
    driver: "Rahman",
    route: "Mülheim → Essen",
    eta: "Start 14:00",
    status: "Geplant",
    date: "09.04.2026",
  },
];

export default function DeliveryPage() {
  const getStatusClass = (status) => {
    switch (status) {
      case "Unterwegs":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Geliefert":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Geplant":
        return "bg-sky-100 text-sky-700 border-sky-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Lieferungen</h2>
          <p className="mt-1 text-slate-600">
            Überblick über geplante, laufende und abgeschlossene Lieferungen.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Plus className="h-4 w-4" />
          Lieferung planen
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Geplante Lieferungen</p>
            <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Unterwegs</p>
            <div className="rounded-2xl bg-amber-50 p-3 text-amber-600">
              <Truck className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">5</p>
        </div>

        <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Heute geliefert</p>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">18</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Aktuelle Touren</h3>
            <p className="text-sm text-slate-600">
              Status, Fahrer und Strecke im Überblick.
            </p>
          </div>

          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="rounded-2xl border border-black/5 bg-slate-50 p-4"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {delivery.id} • {delivery.customer}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Fahrer: {delivery.driver}
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                      <MapPin className="h-4 w-4" />
                      {delivery.route}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Datum: {delivery.date}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <span className="text-sm font-medium text-slate-700">
                      ETA: {delivery.eta}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusClass(
                        delivery.status,
                      )}`}
                    >
                      {delivery.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Live-Tracking Vorschau</h3>
          <p className="mt-1 text-sm text-slate-600">
            Beispiel einer Karten- oder Trackingansicht für Fahrer und
            Lieferung.
          </p>

          <div className="mt-5 flex h-[360px] items-center justify-center rounded-[24px] border border-dashed border-orange-200 bg-orange-50 text-center">
            <div>
              <Truck className="mx-auto h-10 w-10 text-[#e86f1d]" />
              <p className="mt-4 text-lg font-semibold text-slate-800">
                Kartenansicht / Tracking
              </p>
              <p className="mt-2 max-w-xs text-sm text-slate-600">
                Hier könnte später eine Google-Maps- oder Routenansicht
                integriert werden, damit PanoBake alle Lieferungen live
                verfolgen kann.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
