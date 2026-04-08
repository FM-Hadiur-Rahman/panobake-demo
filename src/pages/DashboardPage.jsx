import {
  Building2,
  Truck,
  Package,
  Mail,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";
import { stats, orders, recentEmails } from "../data/demoData";
import SummaryCard from "../components/SummaryCard";
import HeroMiniCard from "../components/HeroMiniCard";

export default function DashboardPage({ setActivePage, badge }) {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] bg-gradient-to-r from-[#1f140e] to-[#5b2c11] p-8 text-white shadow-xl">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
              Digitales Management für PanoBake
            </p>
            <h3 className="mt-3 text-4xl font-bold leading-tight">
              Weniger Papier. Weniger Fehler. Mehr Übersicht.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-orange-50/90">
              Aktuell werden Kunden, Bestellungen und Rechnungen manuell
              verwaltet. Mit diesem System laufen alle Prozesse zentral:
              Kundendaten, Bestellhistorie, Rechnungen und E-Mails in einer
              Oberfläche.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2">
                300+ Kunden
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Bäckerei / HoReCa / Handel
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Rechnungen & Aufträge
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                B2B Online-Bestellung
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
              value="Offen bis Geliefert"
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
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <SummaryCard
              key={item.label}
              title={item.label}
              value={item.value}
              icon={Icon}
            />
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
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
              className="rounded-2xl border border-black/5 bg-slate-50 px-4 py-2 text-sm"
            >
              Alle ansehen
            </button>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 4).map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-slate-500">
                    {order.customer} • {order.date}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {order.products}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-700">
                    {order.total}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${badge(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            Warum diese Lösung sinnvoll ist
          </h3>
          <div className="mt-5 space-y-4">
            {[
              "Kein manuelles Suchen nach Kundendaten",
              "Rechnungen in Sekunden statt per Hand",
              "Transparente Bestellhistorie pro Kunde",
              "Weniger Fehler bei wiederkehrenden Aufträgen",
              "Professioneller Auftritt gegenüber Geschäftskunden",
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
                    className={`rounded-full border px-3 py-1 text-xs ${badge(mail.status)}`}
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

        <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e86f1d]">
            Gesprächsleitfaden
          </p>
          <h3 className="mt-3 text-2xl font-bold">
            So können Sie es dem Kunden zeigen
          </h3>
          <p className="mt-4 leading-7 text-slate-700">
            „Aktuell verwalten Sie Ihre Kunden, Bestellungen und Rechnungen
            manuell – wahrscheinlich über Excel, Telefon oder Papier. Mit dieser
            Software haben Sie alles in einem System: Kundenverwaltung,
            Bestellungen, Rechnungen, Kommunikation und ein Online-Portal, über
            das Ihre Geschäftskunden direkt bestellen können.“
          </p>
          <div className="mt-6 rounded-2xl border border-orange-200 bg-white p-4 text-sm text-slate-600">
            Tipp: Erst das Dashboard zeigen, dann Kunden, danach Bestellungen
            und zuletzt die Rechnungsansicht.
          </div>
        </div>
      </section>
    </div>
  );
}
