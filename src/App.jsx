import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  ShoppingCart,
  FileText,
  Package,
  Truck,
  Warehouse,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import OrdersPage from "./pages/OrdersPage";
import InvoicesPage from "./pages/InvoicesPage";
import OnlinePortalPage from "./pages/OnlinePortalPage";
import ProductsPage from "./pages/ProductsPage";
import DeliveryPage from "./pages/DeliveryPage";
import WarehousePage from "./pages/WarehousePage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "customers", label: "Kunden", icon: Users },
    { id: "orders", label: "Bestellungen", icon: ShoppingCart },
    { id: "invoices", label: "Rechnungen", icon: FileText },
    { id: "portal", label: "Online-Portal", icon: Package },
    { id: "products", label: "Produkte", icon: Package },
    { id: "delivery", label: "Lieferung", icon: Truck },
    { id: "warehouse", label: "Lager", icon: Warehouse },
  ];

  const badge = (status) => {
    const map = {
      Aktiv: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Neu: "bg-sky-100 text-sky-700 border-sky-200",
      Premium: "bg-orange-100 text-orange-700 border-orange-200",
      Geliefert: "bg-emerald-100 text-emerald-700 border-emerald-200",
      "In Bearbeitung": "bg-amber-100 text-amber-700 border-amber-200",
      Offen: "bg-slate-100 text-slate-700 border-slate-200",
      Bezahlt: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Versendet: "bg-sky-100 text-sky-700 border-sky-200",
      Überfällig: "bg-rose-100 text-rose-700 border-rose-200",
      Zugestellt: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Geöffnet: "bg-orange-100 text-orange-700 border-orange-200",
      "Neu eingegangen": "bg-sky-100 text-sky-700 border-sky-200",
      "In Prüfung": "bg-amber-100 text-amber-700 border-amber-200",
      Freigegeben: "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Auf Lager": "bg-emerald-100 text-emerald-700 border-emerald-200",
      Niedrig: "bg-amber-100 text-amber-700 border-amber-200",
      Kritisch: "bg-red-100 text-red-700 border-red-200",
      Unterwegs: "bg-amber-100 text-amber-700 border-amber-200",
      Geplant: "bg-sky-100 text-sky-700 border-sky-200",
      Stabil: "bg-emerald-100 text-emerald-700 border-emerald-200",
    };

    return map[status] || "bg-slate-100 text-slate-700 border-slate-200";
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[300px_1fr]">
        <Sidebar
          navItems={navItems}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="overflow-hidden">
          <Header />

          <div className="p-6 lg:p-8">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {activePage === "dashboard" && (
                <DashboardPage setActivePage={setActivePage} badge={badge} />
              )}

              {activePage === "customers" && (
                <CustomersPage
                  search={search}
                  setSearch={setSearch}
                  badge={badge}
                />
              )}

              {activePage === "orders" && <OrdersPage badge={badge} />}
              {activePage === "invoices" && <InvoicesPage badge={badge} />}
              {activePage === "portal" && <OnlinePortalPage badge={badge} />}
              {activePage === "products" && <ProductsPage badge={badge} />}
              {activePage === "delivery" && <DeliveryPage badge={badge} />}
              {activePage === "warehouse" && <WarehousePage badge={badge} />}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
