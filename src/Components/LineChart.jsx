import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { marketingData } from "../data/mockData";
import { useMemo } from "react";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = useMemo(() => {
    // Grouper les montants par date
    const stats = marketingData.reduce((acc, row) => {
      acc[row.date] = (acc[row.date] || 0) + row.amount;
      return acc;
    }, {});

    //  Trier les dates par ordre chronologique
    const sortedDates = Object.keys(stats).sort((a, b) => new Date(a) - new Date(b));

    // Formater pour Nivo Line
    return [
      {
        id: "Revenue Evolution",
        color: colors.greenAccent[500],
        data: sortedDates.map((date) => ({
          x: date,
          y: stats[date],
        })),
      },
    ];
  }, [colors.greenAccent]);

  return (
    <ResponsiveLine
      data={data}
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
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Time (Dates)",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Revenue (FCFA)",
        legendOffset: -50,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={true}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true} // Indispensable pour l'interaction
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 12,
          symbolShape: "circle",
          text: { fill: colors.grey[100] }
        }
      ]}
    />
  );
};

export default LineChart;