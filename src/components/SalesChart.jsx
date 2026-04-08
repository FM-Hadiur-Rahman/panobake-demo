import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { month: "Jan", umsatz: 18000, bestellungen: 110 },
  { month: "Feb", umsatz: 22000, bestellungen: 128 },
  { month: "Mär", umsatz: 21000, bestellungen: 122 },
  { month: "Apr", umsatz: 26000, bestellungen: 140 },
  { month: "Mai", umsatz: 31000, bestellungen: 165 },
  { month: "Jun", umsatz: 28750, bestellungen: 154 },
  { month: "Jul", umsatz: 33400, bestellungen: 172 },
  { month: "Aug", umsatz: 35200, bestellungen: 184 },
];

export default function SalesChart() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-slate-900">
            Umsatzentwicklung
          </h3>
          <p className="text-sm text-slate-600">
            Monatliche Entwicklung der Umsätze.
          </p>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} €`, "Umsatz"]} />
              <Line
                type="monotone"
                dataKey="umsatz"
                stroke="#e86f1d"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-slate-900">
            Bestellungen pro Monat
          </h3>
          <p className="text-sm text-slate-600">
            Überblick über das Bestellvolumen.
          </p>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [value, "Bestellungen"]} />
              <Bar dataKey="bestellungen" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
