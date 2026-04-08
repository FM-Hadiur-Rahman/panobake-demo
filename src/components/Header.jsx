import { Calendar, Bell, Search, UserCircle2, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 px-6 py-4 backdrop-blur lg:px-8">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-medium text-[#e86f1d]">Interaktive Demo</p>
          <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
            Kunden-, Bestell- und Rechnungsverwaltung
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Zentrale Übersicht über alle Kunden, Bestellungen, Umsätze, Lager
            und Lieferprozesse.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm text-slate-600 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <span className="text-slate-400">Suchen…</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm text-slate-600 shadow-sm">
              <Calendar className="h-4 w-4" />
              Aktualisiert: 08.04.2026
            </div>

            <button className="relative rounded-2xl border border-black/5 bg-slate-50 p-3 text-slate-600 shadow-sm transition hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#e86f1d]" />
            </button>

            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 shadow-sm">
              <UserCircle2 className="h-6 w-6 text-[#e86f1d]" />
              <div className="hidden text-left sm:block">
                <p className="text-sm font-medium text-slate-900">Demo Admin</p>
                <p className="text-xs text-slate-500">PanoBake Team</p>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>

            <button className="rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95">
              Vollständige Lösung anfragen
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
