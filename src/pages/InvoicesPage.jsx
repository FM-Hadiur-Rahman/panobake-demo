import { Plus } from "lucide-react";
import { invoices } from "../data/demoData";
import Row from "../components/Row";

export default function InvoicesPage({ badge }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Rechnungsverwaltung</h3>
          <p className="text-slate-600">
            Erstellen Sie professionelle Rechnungen automatisch und verfolgen
            Sie den Zahlungsstatus.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Plus className="h-4 w-4" /> Neue Rechnung
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Rechnung</th>
                  <th className="px-6 py-4 font-medium">Kunde</th>
                  <th className="px-6 py-4 font-medium">Betrag</th>
                  <th className="px-6 py-4 font-medium">Fällig am</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-t border-black/5">
                    <td className="px-6 py-4 font-semibold">{invoice.id}</td>
                    <td className="px-6 py-4 text-slate-700">
                      {invoice.customer}
                    </td>
                    <td className="px-6 py-4 font-medium">{invoice.amount}</td>
                    <td className="px-6 py-4 text-slate-700">{invoice.due}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs ${badge(invoice.status)}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e86f1d]">
            Rechnungsvorschau
          </p>

          <div className="mt-5 rounded-[24px] border border-black/5 bg-[#faf8f4] p-6 shadow-inner">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-slate-900">
                  PanoBake GmbH
                </p>
                <p className="mt-1 text-sm text-slate-500">Rechnung RE-2001</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Bezahlt
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-slate-700">
              <p className="font-semibold">Kunde: REWE Markt Köln</p>
              <p className="mt-2">Produkt: Tiefkühl-Brötchen</p>
              <p>Menge: 200 Stück</p>
              <p>Einzelpreis: 0,50 €</p>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <Row label="Zwischensumme" value="100,00 €" />
              <Row label="Transport / Lieferung" value="20,00 €" />
              <Row label="MwSt." value="19,00 €" />
              <Row label="Gesamtbetrag" value="139,00 €" bold />
              <Row label="Fälligkeitsdatum" value="10.04.2026" />
            </div>

            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-slate-600">
              Diese Vorschau zeigt dem Kunden sofort, wie professionell und klar
              Rechnungen mit dem System erstellt werden können.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
