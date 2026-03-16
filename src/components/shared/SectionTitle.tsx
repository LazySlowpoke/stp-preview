import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionTitle;