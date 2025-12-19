import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { marketingData } from "../data/mockData";
import { useMemo } from "react"; 

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Data transformation, grouped by categories
  const data = useMemo(() => {

    // if(!marketingData) return [];
    const stats = marketingData.reduce((acc, row) => {
      acc[row.category] = (acc[row.category] || 0) + row.amount;
      return acc;
    }, {});

    return Object.keys(stats).map((category) => ({
      category: category,
      revenue: stats[category],
    }));
  }, []);

  return (
    <ResponsiveBar
      data={data}
      // axis and legends visibilities
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        legends: { text: { fill: colors.grey[100] } },
        tooltip: { container: { color: colors.primary[500] } },
      }}

      keys={["revenue"]}
      indexBy="category"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Product Categories",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Revenue (FCFA)",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      enableLabel={false}
      role="application"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in category: ${e.indexValue}`}
    />
  );
};

export default BarChart;