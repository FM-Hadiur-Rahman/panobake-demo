import { Users, ShoppingCart, FileText, Package } from "lucide-react";

export const stats = [
  { label: "Aktive Kunden", value: "300", icon: Users },
  { label: "Bestellungen", value: "1.248", icon: ShoppingCart },
  { label: "Rechnungen", value: "982", icon: FileText },
  { label: "Online-Bestellungen", value: "186", icon: Package },
];

export const customers = [
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

export const orders = [
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

export const invoices = [
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

export const recentEmails = [
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

export const onlineOrders = [
  {
    id: "WEB-301",
    customer: "REWE Markt Köln",
    contact: "einkauf@rewe-koeln.de",
    basket: "TK-Brötchen, Croissants, Burger Buns",
    total: "860 €",
    status: "Neu eingegangen",
    time: "Heute, 08:45",
  },
  {
    id: "WEB-302",
    customer: "Café Morgenstern",
    contact: "einkauf@cafe-morgenstern.de",
    basket: "Schokocroissants, Mini-Baguettes",
    total: "240 €",
    status: "In Prüfung",
    time: "Heute, 10:10",
  },
  {
    id: "WEB-303",
    customer: "Hotel Rheinblick",
    contact: "kueche@hotel-rheinblick.de",
    basket: "Buttercroissants, Pizza-Teiglinge",
    total: "510 €",
    status: "Freigegeben",
    time: "Gestern, 16:30",
  },
];
