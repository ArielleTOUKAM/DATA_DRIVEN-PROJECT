import React from 'react'
import { Box, IconButton, useTheme, Snackbar, Alert } from "@mui/material"
import { useContext, useState } from 'react'
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchFeedback, setSearchFeedback] = useState("");
    const [openFeedback, setOpenFeedback] = useState(false);
    
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setSearchFeedback("Please enter a search term");
            setOpenFeedback(true);
            return;
        }
        setSearchFeedback(`Search for "${searchTerm}" in the Analytics page using the filters`);
        setOpenFeedback(true);
        setSearchTerm("");
    };
    
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    
  return (
    <Box display="flex" justifyContent="space-between" p={1} sx={{ height: "50px"}}>
        {/*SEARCH BAR*/}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px"  >
            
            <InputBase sx={{ ml:2, flex: 1}} placeholder="Search campaigns, channels, regions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <IconButton type='button' sx={{ p:1 }} onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
        
        {/*ICONS*/}
        <Box display="flex" gap={1}>
            <IconButton onClick = {colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon/>
                ) : <LightModeOutlinedIcon/>}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon/>
            </IconButton>
        </Box>
        
        <Snackbar open={openFeedback} autoHideDuration={4000} onClose={() => setOpenFeedback(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={() => setOpenFeedback(false)} severity="info" sx={{ width: '100%' }}>
                {searchFeedback}
            </Alert>
        </Snackbar>
    </Box>
  )
}

export default Topbar