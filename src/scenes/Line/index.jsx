import { Box } from "@mui/material";
import Header from '../../components/Header'
import LineChart from "../../components/LineChart.jsx";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Evolution of Revenue over Time" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;