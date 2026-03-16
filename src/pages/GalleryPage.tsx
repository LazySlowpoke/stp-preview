import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const imageModules = import.meta.glob("../assets/images/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
}) as Record<string, { default: string }>;

console.log("imageModules:", imageModules)

const imagePaths = Object.entries(imageModules).map(([path, module]) => {
  const match = path.match(/images\/([^/]+)\/[^/]+$/);

console.log("ImagePaths:", imagePaths)

  return {
    path,
    src: module.default,
    folderName: match ? match[1] : "",
  };
});

function GalleryPage() {
  const { folderName } = useParams();
  const navigate = useNavigate();

  const images = useMemo(() => {
    if (!folderName) return [];

    return imagePaths
      .filter((image) => image.folderName === folderName)
      .map((image) => image.src);
  }, [folderName]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
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
          {folderName}
        </Typography>

        <Button variant="contained" onClick={() => navigate("/dashboard")}>
          Back
        </Button>
      </Box>

      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 2 }}>
              <CardMedia
                component="img"
                image={image}
                alt={`Imagem ${index + 1}`}
                sx={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default GalleryPage;