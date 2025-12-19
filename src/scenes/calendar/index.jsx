import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import  {formatDate} from "@fullcalendar/core";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listGridPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {Box, List, ListItem, ListItemText, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: ` ${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected) =>
    {
        if (window.confirm(`Do you really want to delete this event? '${selected.event.title}'` )){
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title= "CALENDAR" subtitle="Your full interactive calendar"/>
            <Box display={"flex"} justifyContent={"space-between"}>

                {/* calendar sidebar */}
                <Box flex=" 1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5" > Events </Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id} sx= {{backgroundColor: colors.greenAccent[500],
                                margin: "10px 0",
                            borderRadius: "2px",
                            }}>
                                <ListItemText 
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year:"numeric",
                                            month: "short",
                                            day: "numeric"

                                        })}
                                    </Typography>

                                }/>
                
                            </ListItem>
                        ))}
                    </List>

                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px" >
                    <FullCalendar
                        height="75vh"
                        plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listGridPlugin,
                        ]}

                        headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}

                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)} //updates
                        initialEvents={[
                        { id: "2341", title: "Valentine's promotion", date: "2026-02-14" },
                        { id: "4321", title: "Christmas campaign", date: "2025-12-25" },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
    
}

export default Calendar