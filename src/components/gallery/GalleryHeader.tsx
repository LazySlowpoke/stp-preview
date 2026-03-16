import { Box, Typography, Button } from "@mui/material";

interface GalleryHeaderProps {
  title: string;
  onBack: () => void;
}

function GalleryHeader({ title, onBack }: GalleryHeaderProps) {
  return (
    <Box
      sx={{
        mb: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        {title}
      </Typography>

      <Button variant="contained" onClick={onBack}>
        Back
      </Button>
    </Box>
  );
}

export default GalleryHeader;