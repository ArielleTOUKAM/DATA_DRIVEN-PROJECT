import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { marketingData } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Datasets = () => {
    const theme = useTheme();
    const colors = tokens( theme.palette.mode);

    const colums = [
        { field: "id", headerName: "ID" }, 
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell",},
        { field: "categorie", headerName: "Categorie" },
        { field: "valeur", headerName: "Valeur" },
        { field: "date", headerName: "Date", flex: 1},
        { field: "actions", headerName: "Actions", flex: 1 },
    ];

     return (
        <Box m='20px'>
            <Header title="Datasets" subtitle="Managing the Datasets" />
            <Box m="40px 0 0 0" height="75vh"
              >
                <DataGrid
                  rows = {marketingData}
                  colums = {colums}
                />

            </Box>
        </Box>
     )
}

export default Datasets;

