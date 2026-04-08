import { Factory, Lock, Mail } from "lucide-react";

export default function LoginPage({ onLogin }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f4ef] p-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-2xl lg:grid-cols-2">
        <div className="bg-gradient-to-br from-[#1f140e] via-[#4b240d] to-[#7a3a12] p-10 text-white">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold">
            <Factory className="h-4 w-4" />
            PanoBake Verwaltungssystem
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight">
            Digitale Verwaltung für Kunden, Bestellungen, Lager und Lieferung
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-orange-50/90">
            Ein zentrales System für Geschäftskunden, Aufträge, Rechnungen,
            Online-Bestellungen, Lagerbestände und Auslieferungen.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              "300+ Kunden zentral verwalten",
              "B2B Online-Bestellungen direkt im System",
              "Rechnungen automatisch erstellen",
              "Lager- und Lieferstatus live im Blick",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e86f1d]">
              Demo Login
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Willkommen zurück
            </h2>
            <p className="mt-2 text-slate-600">
              Melden Sie sich an, um das PanoBake System zu öffnen.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  E-Mail
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    defaultValue="demo@panobake.de"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Passwort
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3">
                  <Lock className="h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    defaultValue="123456"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <button
                onClick={onLogin}
                className="w-full rounded-2xl bg-[#e86f1d] px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                In Demo einloggen
              </button>
            </div>

            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-slate-700">
              Demo-Zugang für Präsentation. Kein echtes Login notwendig.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
