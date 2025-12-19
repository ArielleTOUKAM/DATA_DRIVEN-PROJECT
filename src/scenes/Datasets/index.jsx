import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { marketingData } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from '../../components/Header'
import { useState } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"

const Datasets = () => {
    const theme = useTheme();
    const colors = tokens( theme.palette.mode);
    //Créer l'état : par défaut, le tableau est vide
    const [rows, setRows] = useState([]);
    //Fonction pour charger les données au clic
    const handleImport = () => {
      setRows(marketingData);
    };

    const columns = [
        { field: "id", headerName: "ID" }, 
        { field: "date", headerName: "Date", flex: 1},
        { field: "customer_name", headerName: "Name", flex: 1, cellClassName: "name-column--cell",},
        { field: "customer_id", headerName: "ID Customer", flex: 1, cellClassName: "name-column--cell",},
        { field: "campaign", headerName: "Campaign" },
        { field: "category", headerName: "Category" },
        { field: "channel", headerName: "Channel" },
        { field: "amount", headerName: "Amount" },
        { field: "region", headerName: "Region", flex: 1 },
    ];

    
     return (
        <Box m='20px'>
            <Box display= "flex" justifyContent="space-between" alignItems="center">
              <Header title="Datasets" subtitle="Managing the Datasets" />
              <Button
                  sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight:" bold",
                    padding: "10px 20px",
                  }}
                  onClick={handleImport}
                  >
                    <DownloadOutlinedIcon sx={{ marginRight: "10px"}}/> Import Data
                  </Button>
            </Box>
            <Box m="40px 0 0 0" height="75vh">
              <DataGrid
                  rows = {rows}
                  columns = {columns}
              />

            </Box>
        </Box>
     )
}

export default Datasets;

