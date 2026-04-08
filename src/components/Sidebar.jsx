import { Factory } from "lucide-react";

export default function Sidebar({ navItems, activePage, setActivePage }) {
  return (
    <aside className="border-r border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-orange-50 px-3 py-2 text-sm font-semibold text-[#e86f1d]">
          <Factory className="h-4 w-4" /> PanoBake Verwaltungssystem
        </div>
        <h1 className="mt-4 text-2xl font-bold">Kunden & Aufträge</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Demo für eine zentrale Verwaltung von Kunden, Bestellungen, Rechnungen
          und E-Mail-Kommunikation.
        </p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                active
                  ? "bg-[#e86f1d] text-white shadow-lg"
                  : "bg-slate-50 text-slate-700 hover:bg-orange-50"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50 p-5">
        <p className="text-sm font-semibold text-[#e86f1d]">
          Nutzen für PanoBake
        </p>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          <li>• Alle 300 Kunden zentral verwalten</li>
          <li>• Bestellungen schneller erfassen</li>
          <li>• Rechnungen automatisch erstellen</li>
          <li>• E-Mails professionell versenden</li>
          <li>• Kunden können online bestellen</li>
        </ul>
      </div>
    </aside>
  );
}
