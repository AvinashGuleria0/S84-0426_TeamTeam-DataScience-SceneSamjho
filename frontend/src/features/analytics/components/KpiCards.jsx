const KPI_ITEMS = [
  { key: "total_accidents", label: "Total Accidents" },
  { key: "total_fatalities", label: "Total Fatalities" },
  { key: "top_hazard_weather", label: "Top Hazard Weather" },
  { key: "top_hazard_road", label: "Top Hazard Road" },
];

function formatKpiValue(value) {
  if (value === null || value === undefined || value === "") {
    return "N/A";
  }

  return value;
}

export function KpiCards({ data = {} }) {
  return (
    <div className="kpi-grid" aria-label="KPI cards">
      {KPI_ITEMS.map((item) => (
        <article key={item.key} className="kpi-card">
          <h3>{item.label}</h3>
          <p>{formatKpiValue(data[item.key])}</p>
        </article>
      ))}
    </div>
  );
}
