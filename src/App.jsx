import { ColorModeContext, useMode } from "./theme"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {Routes, Route} from "react-router-dom"
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Datasets from "./scenes/Datasets";
import Line from "./scenes/Line";

import Settings from "./scenes/settings";
import Analytics from "./scenes/analytics";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq/faq";




function App() {
  const [theme, colorMode] = useMode();

return (
  <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <div className="app" style={{ display: 'flex'}}> 
        <Sidebar/>
        <main className="content">
          <Topbar />

          <Routes>
            <Route path="/" element = {<Dashboard/>} />
            <Route path="/analytics" element = {<Analytics/>} />
            <Route path="/datasets" element = {<Datasets/>} /> 
           {/* <Route path="/reports" element = {<Reports/>} /> */}
            <Route path="/settings" element = {<Settings/>} />
            <Route path="/bar" element = {<Bar/>} />
            <Route path="/pie" element = {<Pie/>} />
            <Route path="/calendar" element = {<Calendar/>} />
            <Route path="/faq" element = {<Faq/>} />
            {/* <Route path="/settings" element = {<Settings/>} /> */}
            {/* <Route path="/calendar" element = {<Calendar/>} /> */}
            <Route path="/line" element = {<Line/>} />

          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
);
}

export default App
