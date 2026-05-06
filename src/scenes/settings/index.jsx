import { Box, Typography, TextField, Switch, FormControlLabel, Button, useTheme, Divider, Snackbar, Alert } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // Settings state with localStorage initialization
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("userSettings");
    return saved ? JSON.parse(saved) : {
      marketerName: "Tchanga Esther",
      clientName: "My business brand name",
      monthlyRevenue: 5000000,
      maxBudget: 1000000,
      showTooltips: true,
      yearComparison: false,
      budgetAlerts: true
    };
  });

  const [saveMessage, setSaveMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "number") {
      setSettings(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setSettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSwitchChange = (name) => (event) => {
    setSettings(prev => ({ ...prev, [name]: event.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveMessage("Settings saved successfully!");
    setOpenSnackbar(true);
    setTimeout(() => setOpenSnackbar(false), 3000);
  };

  return (
    <Box m="20px">
      <Header title="SETTINGS" subtitle="Configure your settings" />

      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex" 
        flexDirection="column" 
        gap="30px" 
        maxWidth="800px" 
        backgroundColor={colors.primary[400]} 
        p="30px" 
        borderRadius="8px"
      >
        {/* General information */}
        <Box>
          <Typography variant="h4" color={colors.greenAccent[400]} mb="15px">
            Profile
          </Typography>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
            <TextField 
              fullWidth 
              variant="filled" 
              label="Marketer name" 
              name="marketerName"
              value={settings.marketerName}
              onChange={handleInputChange}
            />
            <TextField 
              fullWidth 
              variant="filled" 
              label="Client or Enterprise name" 
              name="clientName"
              value={settings.clientName}
              onChange={handleInputChange}
            />
          </Box>
        </Box>

        <Divider />

        {/* Objectifs */}
        <Box>
          <Typography variant="h5" color={colors.greenAccent[400]} mb="15px">
            Performance objectifs
          </Typography>
          <Typography variant="body2" mb="15px" color={colors.grey[100]}>
            Define your targets for the dashboard to compare your real result.
          </Typography>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
            <TextField 
              fullWidth 
              variant="filled" 
              label="Monthly revenu objectifs (FCFA)" 
              type="number" 
              name="monthlyRevenue"
              value={settings.monthlyRevenue}
              onChange={handleInputChange}
            />
            <TextField 
              fullWidth 
              variant="filled" 
              label="Maximum budjet for campaign" 
              type="number" 
              name="maxBudget"
              value={settings.maxBudget}
              onChange={handleInputChange}
            />
          </Box>
        </Box>

        <Divider />

        {/* Mode preference */}
        <Box>
          <Typography variant="h5" color={colors.greenAccent[400]} mb="15px">
            Display preferences
          </Typography>
          <Box display="flex" flexDirection="column">
            <FormControlLabel 
              control={
                <Switch 
                  color="secondary" 
                  checked={settings.showTooltips}
                  onChange={handleSwitchChange("showTooltips")}
                />
              } 
              label="Display the detailed tooltips on the charts" 
            />
            <FormControlLabel 
              control={
                <Switch 
                  color="secondary" 
                  checked={settings.yearComparison}
                  onChange={handleSwitchChange("yearComparison")}
                />
              } 
              label="Comparaison year mode n-1" 
            />
            <FormControlLabel 
              control={
                <Switch 
                  color="secondary" 
                  checked={settings.budgetAlerts}
                  onChange={handleSwitchChange("budgetAlerts")}
                />
              } 
              label="Receive alerts if budget exceeds" 
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained" size="large">
            Save modifications
          </Button>
        </Box>
      </Box>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          {saveMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Settings;