import { Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-black/5 bg-white px-6 py-5 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-[#e86f1d]">Interaktive Demo</p>
          <h2 className="text-2xl font-bold">
            Kunden-, Bestell- und Rechnungsverwaltung
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Zentrale Übersicht über alle Kunden, Bestellungen und Umsätze Ihres
            Unternehmens.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <Calendar className="h-4 w-4" /> Aktualisiert: 08.04.2026
          </div>
          <button className="rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
            Vollständige Lösung anfragen
          </button>
        </div>
      </div>
    </header>
  );
}
