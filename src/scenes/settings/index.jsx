import { Box, Typography, TextField, Switch, FormControlLabel, Button, useTheme, Divider } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="SETTINGS" subtitle="Configure your settings" />

      <Box 
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
            <TextField fullWidth variant="filled" label="Marketer name" defaultValue="Tchanga Esther" />
            <TextField fullWidth variant="filled" label={"Client or Enterprise name"} defaultValue="My business brand name" />
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
            <TextField fullWidth variant="filled" label="Monthly revenu objectifs (FCFA)" type="number" defaultValue="5000000" />
            <TextField fullWidth variant="filled" label="Maximum budjet for campaign" type="number" defaultValue="1000000" />
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
              control={<Switch color="secondary" defaultChecked />} 
              label="Display the detailed tooltips on the charts" 
            />
            <FormControlLabel 
              control={<Switch color="secondary" />} 
              label="Comparaison year mode n-1" 
            />
            <FormControlLabel 
              control={<Switch color="secondary" defaultChecked />} 
              label="Rceive alerts if bugdet exceeds" 
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained" size="large">
            Save modifications
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;