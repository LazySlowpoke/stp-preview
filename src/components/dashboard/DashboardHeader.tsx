import { Box, Typography } from "@mui/material";

function DashboardHeader() {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Galleries
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Selecione uma galeria para visualizar as imagens.
      </Typography>
    </Box>
  );
}

export default DashboardHeader;