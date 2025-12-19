import React from 'react'
import { useState } from 'react'
import {Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme} from '@mui/material'
import profileImg from "../../assets/profile.png"

import {Link} from "react-router-dom"
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import LineChartOutlinedIcon from '@mui/icons-material/LineChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimeLineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{color: colors.grey[100]}} onClick={() => setSelected(title)} icon={icon} component={<Link to = {to} />}>
        <Typography variant='body2' sx={{lineHeight: 1.2}}>{title}</Typography>
        
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme= useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{
        "& .ps-sidebar-container": {
            background: `${colors.primary[400]} !important`
        },
        "& .ps-menu-button": {
            padding: "2px 10px !important",
            minHeight: "30px !important",
            height: "30px !important",
        },
        
        "& .ps-menu-button:hover": {
            color: `${colors.blueAccent[300]} !important`,
            backgroundColor: `${colors.primary[300]} !important`,
        },
        "& .ps-menu-button.ps-active": {
            color: `${colors.blueAccent[400]} !important`,
            backgroundColor: `${colors.primary[500]} !important`,
        },
        "& .ps-menuitem-root": {
            margin: "!important",
        },

        ...(isCollapsed && {
            "& .ps-menu-button .ps-menu-label": {
            display: "none !important",
            },

        }),
    }}>
        <ProSidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]} style={{height: "100vh", width: ""}}>
            <Menu>
                <MenuItem onClick={()=> setIsCollapsed(!isCollapsed)} icon = {isCollapsed? <MenuOutlinedIcon/> : undefined}
                style={{
                    margin: "2px 0 4px 0",
                    color: colors.grey[100],
                    minHeight: "35px",
                }}>
               
                    {!isCollapsed && ( 
                         <Box 
                            display="flex"
                            justifyContent='space-between'
                            alignItems="center"
                            ml="10px"
                         >   
                        <Typography variant='h6' color={colors.grey[100]}>
                            MARKETER
                        </Typography>
                    
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)} size='small'>
                            <MenuOutlinedIcon/>
                        </IconButton> 
                        </Box>   
                    )} 
                </MenuItem>

                {/* USER */}
                {!isCollapsed && (
                    <Box mb="3px" mt="-2px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img alt='profile_user' width= "60px" height="60px" src={profileImg} style={{cursor: "pointer", borderRadius:"50%"}}/>
                        </Box>
                        

                        <Box textAlign="center">
                            <Typography variant='h3'  color= {colors.grey[100]} fontWeight='bold' sx={{ m:"2px 0 0 0"}}>Arielle T</Typography>
                            <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt:"2px", mb: "13px"}}> Marketer </Typography>
                        </Box>
                    </Box>
                ) }


                {/* Menu items */}
                <Box paddingLeft={isCollapsed ? undefined: "10%"}>
                    <Item 
                        title="Dashboard" 
                        to="/dashboard" 
                        icon={<HomeOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                        
                    />

                    {!isCollapsed && (<Typography variant='h6' color={colors.grey[300]} sx={{m:"8px 0 5px 20px",
                        
                    }}> Data </Typography>)}
                    <Item 
                        title="Datasets" 
                        to="/datasets" 
                        icon={<ContactsOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                       
                    />

                    {!isCollapsed && (<Typography variant='h6' color={colors.grey[300]} sx={{m:"8px 0 5px 20px"}}> Pages </Typography>)}
                    <Item 
                        title="Analytics" 
                        to="/analytics" 
                        icon={<PeopleOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                        
                    />
                    <Item 
                        title="Reports" 
                        to="/reports" 
                        icon={<HomeOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                        
                    />
                    <Item 
                        title="Settings" 
                        to="/settings" 
                        icon={<PersonOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Calendar" 
                        to="/calendar" 
                        icon={<CalendarTodayOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Item 
                        title="FAQ page" 
                        to="/faq" 
                        icon={<HelpOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}  
                    />


                    {!isCollapsed && (<Typography variant='h6' color={colors.grey[300]} sx={{m:"8px 0 1px 20px"}}> Charts </Typography>)}
                    <Item 
                        title="Bar Chart" 
                        to="/barchart" 
                        icon={<BarChartOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Pie Chart" 
                        to="/piechart" 
                        icon={<PieChartOutlineOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Line Chart" 
                        to="/line" 
                        icon={<TimeLineOutlinedIcon fontSize='small'/>}
                        selected={selected}
                        setSelected={setSelected}
                    />

                </Box> 
            </Menu>

            

            
        </ProSidebar>
  </Box>  
  
 );
};


export default Sidebar
