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

    // CSV Download functionality
    const handleDownloadCSV = () => {
      if (rows.length === 0) {
        alert("No data to download. Please import data first.");
        return;
      }

      const headers = Object.keys(rows[0]);
      const csvContent = [
        headers.join(","),
        ...rows.map(row => 
          headers.map(header => {
            const value = row[header];
            return typeof value === "string" && value.includes(",") ? `"${value}"` : value;
          }).join(",")
        )
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `marketing-data-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // CSV Upload functionality
    const handleUploadCSV = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const csv = e.target.result;
          const lines = csv.trim().split("\n");
          const headers = lines[0].split(",").map(h => h.trim());
          
          const parsedData = lines.slice(1).map((line, index) => {
            const values = line.split(",").map(v => v.trim().replace(/^\"|\"$/g, ""));
            const obj = { id: rows.length + index + 1 };
            headers.forEach((header, i) => {
              if (header === "amount") {
                obj[header] = parseInt(values[i]) || 0;
              } else {
                obj[header] = values[i];
              }
            });
            return obj;
          });

          setRows([...rows, ...parsedData]);
          alert(`Successfully imported ${parsedData.length} records`);
        } catch (error) {
          alert("Error parsing CSV file. Please ensure it follows the correct format.");
        }
      };
      reader.readAsText(file);
      event.target.value = "";
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
              <Box display="flex" gap="10px">
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
                      <DownloadOutlinedIcon sx={{ marginRight: "10px"}}/> Import Demo Data
                    </Button>
                <Button
                    sx={{
                      backgroundColor: colors.greenAccent[600],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight:" bold",
                      padding: "10px 20px",
                    }}
                    onClick={handleDownloadCSV}
                    disabled={rows.length === 0}
                    >
                      <DownloadOutlinedIcon sx={{ marginRight: "10px"}}/> Export CSV
                    </Button>
                <Button
                    sx={{
                      backgroundColor: colors.blueAccent[500],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight:" bold",
                      padding: "10px 20px",
                    }}
                    component="label"
                    >
                      <DownloadOutlinedIcon sx={{ marginRight: "10px"}}/> Upload CSV
                      <input
                        hidden
                        accept=".csv"
                        type="file"
                        onChange={handleUploadCSV}
                      />
                    </Button>
              </Box>
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

