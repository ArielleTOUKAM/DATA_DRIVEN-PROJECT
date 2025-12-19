import {Box, TextField, Typography, useTheme, MenuItem} from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useMemo } from "react";
import { marketingData, campaigns, channels} from "../../data/mockData";

import Header from "../../components/Header" 


const Analytics = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //State which stocks users choice
    const [selectedCampaign, setSelectedCampaign] = useState("All");
    const [selectedChannel, setSelectedChannel] = useState("All");

    //Filter logique: Adapts to user's choice
    const filteredRows = useMemo(() => {
        return marketingData.filter((row) => {
            const matchCampaign = selectedCampaign ==="All" || row.campaign === selectedCampaign;
            const matchChannel = selectedChannel ==="All" || row.channel === selectedChannel;

            return matchCampaign && matchChannel;
        });
    }, [selectedCampaign, selectedChannel]);


    //Calculation of dynamic total
    const totalAmount = filteredRows.reduce((sum, row) => sum + row.amount, 0);

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "date", headerName: "Date", flex: 1},
        {field: "customer_id", headerName: "Id_customer", flex: 1},
        {field: "campaign", headerName: "Campaign", flex: 1},
        {field: "channel", headerName: "Channel", flex: 1},
        {field: "category", headerName: "Category", flex: 1},
        {field: "amount", headerName: "Amount", flex: 1, renderCell: (params) =>
            (<Typography color = {colors.greenAccent[500]}>
                {params.value.toLocaleString()} FCFA
            </Typography>)
        },
        {field: "region", headerName: "Region", flex: 1},
    ];


    return(
        <Box m="20px">
            <Header title="Analysis" subtitle="Filter your marketing data"/>

            {/* Filters bar */}
            <Box display="flex" gap="20px" mb="20px" alignItems="center">
                <TextField select label = "Campaign" value = {selectedCampaign} onChange={(e)=> setSelectedCampaign(e.target.value)} 
                    sx={{width: "150px" }}>
                    <MenuItem value = "All"> All campaigns</MenuItem>
                    {campaigns.map((c) => <MenuItem key={c} value={c}>{c} </MenuItem>)}
                </TextField>

                <TextField select label = "Channel" value = {selectedChannel} onChange={(e)=> setSelectedChannel(e.target.value)} 
                    sx={{width: "150px" }}>
                    <MenuItem value = "All"> All channels</MenuItem>
                    {channels.map((ch) => <MenuItem key={ch} value={ch}>{ch} </MenuItem>)}
                </TextField>


                {/* View of the Analysis Result */}
                <Box ml="auto" p="10px" bgcolor={colors.primary[400]} borderRadius="4px">
                    <Typography variant="h5"> Total Analized </Typography>
                    <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold">
                        {totalAmount.toLocaleString()} FCFA
                    </Typography>
                </Box>
            </Box>


            {/* Table shows only filtered line */}

            <Box height="65vh" sx={{ 
                "& .MuiDataGrid-root": {border: "none"},
                "& .MuiDataGrid-columnHeader": {
                backgroundColor: colors.blueAccent[700],
                },
                "& .MuiDataGrid-cell": {
                borderBottom: "none",
                },
                "& .MuiDataGrid-footerContainer": {
                backgroundColor: colors.blueAccent[700],
                },
                
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                 },
             }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    
                    showToolbar={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                />
            </Box>
        </Box>


    );
};

export default Analytics