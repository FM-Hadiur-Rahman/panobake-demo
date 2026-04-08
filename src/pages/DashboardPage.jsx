import {
  Building2,
  Truck,
  Package,
  Mail,
  ShoppingCart,
  CheckCircle2,
  Activity,
  AlertTriangle,
  BadgeEuro,
} from "lucide-react";
import { stats, orders, recentEmails } from "../data/demoData";
import SummaryCard from "../components/SummaryCard";
import HeroMiniCard from "../components/HeroMiniCard";
import SalesChart from "../components/SalesChart";

export default function DashboardPage({ setActivePage, badge }) {
  const activities = [
    "Neue Bestellung von REWE Markt Köln eingegangen",
    "Rechnung RE-2001 wurde bezahlt",
    "Croissants Lagerbestand ist niedrig",
    "Lieferung LIEF-5001 ist unterwegs",
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[34px] bg-gradient-to-r from-[#1f140e] via-[#4a230d] to-[#6d330f] p-8 text-white shadow-xl lg:p-10">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
              Premium Übersicht für PanoBake
            </p>
            <h3 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Weniger Papier. Weniger Fehler. Mehr Kontrolle.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-orange-50/90">
              Das System verbindet Kundenverwaltung, Bestellungen, Rechnungen,
              Online-Portal, Lager und Lieferung in einer zentralen Oberfläche.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2">
                300+ Kunden
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Bäckerei / HoReCa / Handel
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Online-Bestellungen integriert
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Lager & Lieferung live
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <HeroMiniCard
              icon={Building2}
              label="Kundentypen"
              value="Handel, Bäckerei, Hotel"
            />
            <HeroMiniCard
              icon={Truck}
              label="Lieferstatus"
              value="Geplant bis geliefert"
            />
            <HeroMiniCard
              icon={Package}
              label="Produkte"
              value="TK-Brötchen, Croissants, Teiglinge"
            />
            <HeroMiniCard
              icon={Mail}
              label="Kommunikation"
              value="E-Mail Versand integriert"
            />
            <HeroMiniCard
              icon={ShoppingCart}
              label="Online-Portal"
              value="Kunden bestellen selbst online"
            />
            <HeroMiniCard
              icon={BadgeEuro}
              label="Ziel"
              value="Schneller, klarer, professioneller"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              onClick={() => {
                if (item.label === "Bestellungen") setActivePage("orders");
                if (item.label === "Rechnungen") setActivePage("invoices");
                if (item.label === "Online-Bestellungen")
                  setActivePage("portal");
              }}
              className="cursor-pointer transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <SummaryCard title={item.label} value={item.value} icon={Icon} />
            </div>
          );
        })}
      </section>

      <SalesChart />

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Letzte Bestellungen</h3>
              <p className="text-sm text-slate-500">
                Sofort sichtbar, wer was bestellt hat
              </p>
            </div>
            <button
              onClick={() => setActivePage("orders")}
              className="rounded-2xl border border-black/5 bg-slate-50 px-4 py-2 text-sm transition hover:bg-slate-100"
            >
              Alle ansehen
            </button>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 4).map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-black/5 bg-slate-50 p-4 transition hover:bg-white"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{order.id}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {order.customer} • {order.date}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {order.products}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <span className="font-semibold text-slate-900">
                      {order.total}
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

        <div className="space-y-6">
          <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-[#e86f1d]" />
              <h3 className="text-xl font-semibold">Live Aktivitäten</h3>
            </div>

            <div className="mt-5 space-y-3">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-black/5 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  {index === 0 && "🟢 "}
                  {index === 1 && "💰 "}
                  {index === 2 && "⚠️ "}
                  {index === 3 && "🚚 "}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-[#e86f1d]" />
              <h3 className="text-xl font-semibold">
                Warum diese Lösung wirkt
              </h3>
            </div>

            <div className="mt-5 space-y-4">
              {[
                "Kein manuelles Suchen nach Kundendaten",
                "Rechnungen in Sekunden statt per Hand",
                "Transparente Bestellhistorie pro Kunde",
                "Weniger Fehler bei wiederkehrenden Aufträgen",
                "Bessere Übersicht über Lager und Lieferung",
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
              Gesprächsleitfaden
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              So zeigen Sie den Mehrwert
            </h3>
            <p className="mt-4 leading-7 text-slate-700">
              „Mit dieser Lösung werden Kunden, Bestellungen, Rechnungen,
              Lagerbestände, Lieferungen und Online-Bestellungen in einem System
              zusammengeführt. Das spart täglich Zeit und reduziert Fehler.“
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">E-Mail Kommunikation</h3>
            <Mail className="h-5 w-5 text-[#e86f1d]" />
          </div>

          <div className="mt-5 space-y-3">
            {recentEmails.map((mail) => (
              <div
                key={mail.to + mail.subject}
                className="rounded-2xl border border-black/5 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{mail.subject}</p>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${badge(
                      mail.status,
                    )}`}
                  >
                    {mail.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">An: {mail.to}</p>
                <p className="mt-1 text-sm text-slate-400">{mail.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Schnellübersicht</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <QuickBox title="Heute bezahlt" value="8 Rechnungen" />
            <QuickBox title="Neue Web-Bestellungen" value="3 Eingänge" />
            <QuickBox title="Kritische Lagerwarnungen" value="2 Produkte" />
            <QuickBox title="Lieferungen unterwegs" value="5 Touren" />
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickBox({ title, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}
