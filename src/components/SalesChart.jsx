import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const monthlySalesData = [
  { month: "Jan", umsatz: 18000 },
  { month: "Feb", umsatz: 22000 },
  { month: "Mär", umsatz: 21000 },
  { month: "Apr", umsatz: 26000 },
  { month: "Mai", umsatz: 31000 },
  { month: "Jun", umsatz: 28750 },
  { month: "Jul", umsatz: 33400 },
  { month: "Aug", umsatz: 35200 },
];

export default function SalesChart() {
  return (
    <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-slate-900">Monatsumsatz</h3>
        <p className="text-sm text-slate-600">
          Übersicht der Umsatzentwicklung über mehrere Monate.
        </p>
      </div>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={monthlySalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} €`, "Umsatz"]} />
            <Bar dataKey="umsatz" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
