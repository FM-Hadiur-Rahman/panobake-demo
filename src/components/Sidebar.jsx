import { Factory, Sparkles, ChevronRight } from "lucide-react";

export default function Sidebar({ navItems, activePage, setActivePage }) {
  return (
    <aside className="flex h-screen flex-col border-r border-black/5 bg-white/95 p-5 shadow-sm backdrop-blur xl:p-6">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 px-3 py-2 text-sm font-semibold text-[#e86f1d]">
          <Factory className="h-4 w-4" />
          PanoBake Verwaltungssystem
        </div>

        <div className="mt-5 rounded-[26px] border border-black/5 bg-gradient-to-br from-[#20130d] via-[#4b240d] to-[#6a320f] p-5 text-white shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
            Business Suite
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight">
            Kunden, Aufträge, Lager & Lieferung
          </h1>
          <p className="mt-3 text-sm leading-6 text-orange-50/85">
            Eine zentrale Oberfläche für Vertrieb, Bestellungen, Rechnungen,
            Online-Portal und Logistik.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
              300+ Kunden
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
              B2B Portal
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
              Lager live
            </span>
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Navigation
        </p>
        <Sparkles className="h-4 w-4 text-[#e86f1d]" />
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                active
                  ? "bg-[#e86f1d] text-white shadow-lg"
                  : "bg-slate-50 text-slate-700 hover:bg-orange-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </div>

              <ChevronRight
                className={`h-4 w-4 transition ${
                  active
                    ? "translate-x-0 text-white"
                    : "translate-x-0 text-slate-400 group-hover:text-[#e86f1d]"
                }`}
              />
            </button>
          );
        })}
      </nav>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-orange-50 p-5">
        <p className="text-sm font-semibold text-[#e86f1d]">
          Nutzen für PanoBake
        </p>

        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <div className="rounded-2xl bg-white/70 px-3 py-3">
            Alle 300 Kunden zentral verwalten
          </div>
          <div className="rounded-2xl bg-white/70 px-3 py-3">
            Bestellungen schneller erfassen
          </div>
          <div className="rounded-2xl bg-white/70 px-3 py-3">
            Rechnungen automatisch erstellen
          </div>
          <div className="rounded-2xl bg-white/70 px-3 py-3">
            E-Mails professionell versenden
          </div>
          <div className="rounded-2xl bg-white/70 px-3 py-3">
            Kunden können online bestellen
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-3xl border border-black/5 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Demo Status
          </p>
          <p className="mt-2 text-sm font-medium text-slate-800">
            Premium SaaS Präsentation
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Geeignet für Kundengespräch und Live-Demo.
          </p>
        </div>
      </div>
    </aside>
  );
}
