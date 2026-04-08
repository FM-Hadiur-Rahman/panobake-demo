import { Plus, CheckCircle2 } from "lucide-react";
import { onlineOrders } from "../data/demoData";

export default function OnlinePortalPage({ badge }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold">B2B Online-Bestellportal</h3>
          <p className="text-slate-600">
            Ihre Geschäftskunden können Produkte direkt online auswählen und
            bestellen.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Plus className="h-4 w-4" /> Neue Online-Bestellung
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h4 className="text-xl font-semibold">
                Eingehende Online-Bestellungen
              </h4>
              <p className="text-sm text-slate-500">
                Bestellungen aus dem Kundenportal erscheinen sofort im System.
              </p>
            </div>
            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[#e86f1d]">
              24/7 bestellbar
            </span>
          </div>

          <div className="space-y-3">
            {onlineOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-black/5 bg-slate-50 p-4"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-semibold">
                      {order.id} • {order.customer}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {order.contact}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      Warenkorb: {order.basket}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Eingang: {order.time}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <span className="font-semibold text-slate-800">
                      {order.total}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${badge(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">
              Was der Kunde online machen kann
            </h4>
            <div className="mt-5 space-y-4">
              {[
                "Produkte und Preise ansehen",
                "Favoriten und Standardbestellungen nutzen",
                "Bestellung rund um die Uhr absenden",
                "Rechnungen und Bestellhistorie einsehen",
                "Lieferstatus verfolgen",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-orange-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#e86f1d]" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e86f1d]">
              Mehrwert
            </p>
            <h4 className="mt-3 text-xl font-bold">
              Online bestellen statt anrufen oder schreiben
            </h4>
            <p className="mt-4 leading-7 text-slate-700">
              Damit reduziert PanoBake Telefonaufwand, vermeidet
              Missverständnisse und erhält Bestellungen direkt strukturiert im
              System. Das spart täglich Zeit im Verkauf und in der Verwaltung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
