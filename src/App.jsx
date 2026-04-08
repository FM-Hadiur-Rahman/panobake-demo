import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Users,
  ShoppingCart,
  FileText,
  BarChart3,
  Mail,
  Euro,
  Calendar,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Plus,
  Eye,
  Building2,
  Truck,
  Package,
  Factory,
} from "lucide-react";

export default function ClientCrmDemoLanding() {
  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");

  const stats = [
    { label: "Aktive Kunden", value: "300", icon: Users },
    { label: "Bestellungen", value: "1.248", icon: ShoppingCart },
    { label: "Rechnungen", value: "982", icon: FileText },
    { label: "Monatsumsatz", value: "48.750 €", icon: Euro },
  ];

  const customers = [
    {
      id: "KD-1001",
      name: "REWE Markt Köln",
      phone: "+49 221 4587621",
      email: "einkauf@rewe-koeln.de",
      lastOrder: "07.04.2026",
      totalSpent: "12.840 €",
      status: "Aktiv",
      type: "Einzelhandel",
    },
    {
      id: "KD-1002",
      name: "EDEKA Düsseldorf",
      phone: "+49 211 7483921",
      email: "bestellung@edeka-duesseldorf.de",
      lastOrder: "06.04.2026",
      totalSpent: "9.420 €",
      status: "Aktiv",
      type: "Einzelhandel",
    },
    {
      id: "KD-1003",
      name: "Bäckerei Schneider",
      phone: "+49 203 2214785",
      email: "office@baeckerei-schneider.de",
      lastOrder: "04.04.2026",
      totalSpent: "4.180 €",
      status: "Neu",
      type: "Bäckerei",
    },
    {
      id: "KD-1004",
      name: "Hotel Rheinblick",
      phone: "+49 201 8547732",
      email: "kueche@hotel-rheinblick.de",
      lastOrder: "05.04.2026",
      totalSpent: "7.960 €",
      status: "Premium",
      type: "Hotel / HoReCa",
    },
    {
      id: "KD-1005",
      name: "Café Morgenstern",
      phone: "+49 208 4457812",
      email: "einkauf@cafe-morgenstern.de",
      lastOrder: "07.04.2026",
      totalSpent: "3.640 €",
      status: "Aktiv",
      type: "Café",
    },
  ];

  const orders = [
    {
      id: "AUF-1045",
      customer: "REWE Markt Köln",
      items: 3,
      total: "1.420 €",
      status: "Geliefert",
      date: "07.04.2026",
      products:
        "Tiefkühl-Brötchen 200 Stk, Croissants 150 Stk, Pizza-Teiglinge 300 Stk",
    },
    {
      id: "AUF-1044",
      customer: "EDEKA Düsseldorf",
      items: 2,
      total: "980 €",
      status: "In Bearbeitung",
      date: "06.04.2026",
      products: "Laugenstangen 250 Stk, Mini-Baguettes 180 Stk",
    },
    {
      id: "AUF-1043",
      customer: "Hotel Rheinblick",
      items: 2,
      total: "640 €",
      status: "Offen",
      date: "06.04.2026",
      products: "Buttercroissants 120 Stk, Burger Buns 200 Stk",
    },
    {
      id: "AUF-1042",
      customer: "Café Morgenstern",
      items: 1,
      total: "320 €",
      status: "Geliefert",
      date: "05.04.2026",
      products: "Schokocroissants 140 Stk",
    },
    {
      id: "AUF-1041",
      customer: "Bäckerei Schneider",
      items: 2,
      total: "410 €",
      status: "Geliefert",
      date: "03.04.2026",
      products: "Brotlinge 100 Stk, Fladenbrote 80 Stk",
    },
  ];

  const invoices = [
    {
      id: "RE-2001",
      customer: "REWE Markt Köln",
      amount: "1.420 €",
      due: "10.04.2026",
      status: "Bezahlt",
    },
    {
      id: "RE-2002",
      customer: "EDEKA Düsseldorf",
      amount: "980 €",
      due: "12.04.2026",
      status: "Versendet",
    },
    {
      id: "RE-2003",
      customer: "Hotel Rheinblick",
      amount: "640 €",
      due: "11.04.2026",
      status: "Überfällig",
    },
    {
      id: "RE-2004",
      customer: "Café Morgenstern",
      amount: "320 €",
      due: "13.04.2026",
      status: "Bezahlt",
    },
  ];

  const recentEmails = [
    {
      to: "einkauf@rewe-koeln.de",
      subject: "Rechnung RE-2001",
      status: "Zugestellt",
      time: "Heute, 10:15",
    },
    {
      to: "bestellung@edeka-duesseldorf.de",
      subject: "Bestellbestätigung AUF-1044",
      status: "Versendet",
      time: "Heute, 09:40",
    },
    {
      to: "kueche@hotel-rheinblick.de",
      subject: "Zahlungserinnerung RE-2003",
      status: "Geöffnet",
      time: "Gestern, 17:10",
    },
  ];

  const filteredCustomers = useMemo(() => {
    return customers.filter((c) =>
      [c.name, c.email, c.phone, c.id, c.type]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "customers", label: "Kunden", icon: Users },
    { id: "orders", label: "Bestellungen", icon: ShoppingCart },
    { id: "invoices", label: "Rechnungen", icon: FileText },
  ];

  const badge = (status) => {
    const map = {
      Aktiv: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
      Neu: "bg-sky-500/15 text-sky-300 border-sky-500/20",
      Premium: "bg-orange-500/15 text-orange-300 border-orange-500/20",
      Geliefert: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
      "In Bearbeitung": "bg-amber-500/15 text-amber-300 border-amber-500/20",
      Offen: "bg-slate-500/20 text-slate-200 border-slate-400/20",
      Bezahlt: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
      Versendet: "bg-sky-500/15 text-sky-300 border-sky-500/20",
      Überfällig: "bg-rose-500/15 text-rose-300 border-rose-500/20",
      Zugestellt: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
      Geöffnet: "bg-orange-500/15 text-orange-300 border-orange-500/20",
    };
    return map[status] || "bg-slate-500/20 text-slate-200 border-slate-400/20";
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[300px_1fr]">
        <aside className="border-r border-black/5 bg-white p-6 shadow-sm">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-orange-50 px-3 py-2 text-sm font-semibold text-[#e86f1d]">
              <Factory className="h-4 w-4" /> PanoBake Verwaltungssystem
            </div>
            <h1 className="mt-4 text-2xl font-bold">Kunden & Aufträge</h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Demo für eine zentrale Verwaltung von Kunden, Bestellungen,
              Rechnungen und E-Mail-Kommunikation.
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
            </ul>
          </div>
        </aside>

        <main className="overflow-hidden">
          <header className="border-b border-black/5 bg-white px-6 py-5 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium text-[#e86f1d]">
                  Interaktive Demo
                </p>
                <h2 className="text-2xl font-bold">
                  Kunden-, Bestell- und Rechnungsverwaltung
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Zentrale Übersicht über alle Kunden, Bestellungen und Umsätze
                  Ihres Unternehmens.
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

          <div className="p-6 lg:p-8">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {activePage === "dashboard" && (
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
                          Aktuell werden Kunden, Bestellungen und Rechnungen
                          manuell verwaltet. Mit diesem System laufen alle
                          Prozesse zentral: Kundendaten, Bestellhistorie,
                          Rechnungen und E-Mails in einer Oberfläche.
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
                      </div>
                    </div>
                  </section>

                  <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-500">
                              {item.label}
                            </p>
                            <div className="rounded-2xl bg-orange-50 p-3 text-[#e86f1d]">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>
                          <p className="mt-5 text-3xl font-bold">
                            {item.value}
                          </p>
                        </div>
                      );
                    })}
                  </section>

                  <section className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
                    <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Letzte Bestellungen
                          </h3>
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
                        <h3 className="text-xl font-semibold">
                          E-Mail Kommunikation
                        </h3>
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
                            <p className="mt-2 text-sm text-slate-500">
                              An: {mail.to}
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                              {mail.time}
                            </p>
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
                        „Aktuell verwalten Sie Ihre Kunden, Bestellungen und
                        Rechnungen manuell – wahrscheinlich über Excel, Telefon
                        oder Papier. Mit dieser Software haben Sie alles in
                        einem System: Kundenverwaltung, Bestellungen, Rechnungen
                        und Kommunikation.“
                      </p>
                      <div className="mt-6 rounded-2xl border border-orange-200 bg-white p-4 text-sm text-slate-600">
                        Tipp: Erst das Dashboard zeigen, dann Kunden, danach
                        Bestellungen und zuletzt die Rechnungsansicht.
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activePage === "customers" && (
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">Kundenverwaltung</h3>
                      <p className="text-slate-600">
                        Alle Kundeninformationen, Kontakte und Bestellhistorie
                        an einem Ort.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                        <Search className="h-4 w-4 text-slate-400" />
                        <input
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Kunden suchen"
                          className="bg-transparent text-sm outline-none placeholder:text-slate-400"
                        />
                      </div>
                      <button className="flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
                        <Plus className="h-4 w-4" /> Kunde hinzufügen
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500">
                          <tr>
                            <th className="px-6 py-4 font-medium">Kunde</th>
                            <th className="px-6 py-4 font-medium">Typ</th>
                            <th className="px-6 py-4 font-medium">Telefon</th>
                            <th className="px-6 py-4 font-medium">
                              Letzte Bestellung
                            </th>
                            <th className="px-6 py-4 font-medium">Umsatz</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium">Aktion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredCustomers.map((customer) => (
                            <tr
                              key={customer.id}
                              className="border-t border-black/5"
                            >
                              <td className="px-6 py-4">
                                <div>
                                  <p className="font-semibold">
                                    {customer.name}
                                  </p>
                                  <p className="text-slate-500">
                                    {customer.email}
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-slate-700">
                                {customer.type}
                              </td>
                              <td className="px-6 py-4 text-slate-700">
                                {customer.phone}
                              </td>
                              <td className="px-6 py-4 text-slate-700">
                                {customer.lastOrder}
                              </td>
                              <td className="px-6 py-4 font-medium">
                                {customer.totalSpent}
                              </td>
                              <td className="px-6 py-4">
                                <span
                                  className={`rounded-full border px-3 py-1 text-xs ${badge(customer.status)}`}
                                >
                                  {customer.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <button className="inline-flex items-center gap-2 rounded-xl border border-black/5 bg-slate-50 px-3 py-2 text-xs">
                                  <Eye className="h-4 w-4" /> Anzeigen
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activePage === "orders" && (
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">Bestellverwaltung</h3>
                      <p className="text-slate-600">
                        Verfolgen Sie alle Bestellungen, Lieferstatus und
                        Umsätze in Echtzeit.
                      </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-2xl bg-[#e86f1d] px-5 py-3 text-sm font-semibold text-white shadow-sm">
                      <Plus className="h-4 w-4" /> Bestellung anlegen
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <SummaryCard title="Offen" value="16" icon={Clock3} />
                    <SummaryCard
                      title="In Bearbeitung"
                      value="28"
                      icon={AlertCircle}
                    />
                    <SummaryCard
                      title="Geliefert"
                      value="1.204"
                      icon={CheckCircle2}
                    />
                  </div>

                  <div className="grid gap-4 xl:grid-cols-2">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold">{order.id}</p>
                            <p className="mt-1 text-slate-500">
                              Kunde: {order.customer}
                            </p>
                          </div>
                          <span
                            className={`rounded-full border px-3 py-1 text-xs ${badge(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                          {order.products}
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                          <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-slate-500">Positionen</p>
                            <p className="mt-2 font-semibold">{order.items}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-slate-500">Gesamt</p>
                            <p className="mt-2 font-semibold">{order.total}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4">
                            <p className="text-slate-500">Datum</p>
                            <p className="mt-2 font-semibold">{order.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePage === "invoices" && (
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Rechnungsverwaltung
                      </h3>
                      <p className="text-slate-600">
                        Erstellen Sie professionelle Rechnungen automatisch und
                        verfolgen Sie den Zahlungsstatus.
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
                              <th className="px-6 py-4 font-medium">
                                Rechnung
                              </th>
                              <th className="px-6 py-4 font-medium">Kunde</th>
                              <th className="px-6 py-4 font-medium">Betrag</th>
                              <th className="px-6 py-4 font-medium">
                                Fällig am
                              </th>
                              <th className="px-6 py-4 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {invoices.map((invoice) => (
                              <tr
                                key={invoice.id}
                                className="border-t border-black/5"
                              >
                                <td className="px-6 py-4 font-semibold">
                                  {invoice.id}
                                </td>
                                <td className="px-6 py-4 text-slate-700">
                                  {invoice.customer}
                                </td>
                                <td className="px-6 py-4 font-medium">
                                  {invoice.amount}
                                </td>
                                <td className="px-6 py-4 text-slate-700">
                                  {invoice.due}
                                </td>
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
                            <p className="mt-1 text-sm text-slate-500">
                              Rechnung RE-2001
                            </p>
                          </div>
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                            Bezahlt
                          </span>
                        </div>
                        <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-slate-700">
                          <p className="font-semibold">
                            Kunde: REWE Markt Köln
                          </p>
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
                          Diese Vorschau zeigt dem Kunden sofort, wie
                          professionell und klar Rechnungen mit dem System
                          erstellt werden können.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        <div className="rounded-2xl bg-orange-50 p-3 text-[#e86f1d]">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-5 text-3xl font-bold">{value}</p>
    </div>
  );
}

function Row({ label, value, bold = false }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-slate-500">{label}</span>
      <span
        className={
          bold ? "font-bold text-slate-900" : "font-medium text-slate-800"
        }
      >
        {value}
      </span>
    </div>
  );
}

function HeroMiniCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-orange-100">{label}</p>
        <Icon className="h-5 w-5 text-orange-200" />
      </div>
      <p className="mt-3 text-base font-semibold">{value}</p>
    </div>
  );
}
