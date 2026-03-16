import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const imageModules = import.meta.glob("../assets/images/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
}) as Record<string, { default: string }>;

const imagePaths = Object.entries(imageModules).map(([path, module]) => {
  const match = path.match(/images\/([^/]+)\/[^/]+$/);

  return {
    path,
    src: module.default,
    folderName: match ? match[1] : "",
  };
});

const galleriesMap = imagePaths.reduce<Record<string, string[]>>((acc, image) => {
  if (!image.folderName) return acc;

  if (!acc[image.folderName]) {
    acc[image.folderName] = [];
  }

  acc[image.folderName].push(image.src);

  return acc;
}, {});

const galleries = Object.entries(galleriesMap).map(([folderName, images]) => ({
  folderName,
  coverImage: images[0],
}));

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Galleries
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Selecione uma galeria para visualizar as imagens.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {galleries.map((gallery) => (
          <Grid key={gallery.folderName} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
              <CardActionArea
                onClick={() => navigate(`/gallery/${gallery.folderName}`)}
              >
                <CardMedia
                  component="img"
                  image={gallery.coverImage}
                  alt={gallery.folderName}
                  sx={{
                    height: 260,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {gallery.folderName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;