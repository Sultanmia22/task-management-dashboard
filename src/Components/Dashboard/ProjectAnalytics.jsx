import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { date: "2024-01-01", views: 1234 },
  { date: "2024-01-02", views: 1567 },
  { date: "2024-01-03", views: 1890 },
  { date: "2024-01-04", views: 1456 },
  { date: "2024-01-05", views: 1789 },
];

const ProjectAnalytics = () => {

  const formattedData = data.map((item) => {
    const day = new Date(item.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    return {
      ...item,
      day: day.charAt(0), 
    };
  });

  const maxViews = Math.max(...formattedData.map((d) => d.views));

  return (
    <div className=" w-full h-60">
      <h2 className="text-lg font-semibold 5">Project Analytics</h2>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={formattedData}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Tooltip />

          <Bar
            dataKey="views"
            radius={[20, 20, 20, 20]} 
          >
            {formattedData.map((entry, index) => {
              const isMax = entry.views === maxViews;

              return (
                <Cell
                  key={`cell-${index}`}
                  fill={isMax ? "#006400" : "#34D399"}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectAnalytics;