import { Card, CardMedia } from "@mui/material";

interface GalleryImageCardProps {
  image: string;
  alt: string;
}

function GalleryImageCard({ image, alt }: GalleryImageCardProps) {
  return (
    <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 2 }}>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{
          width: "100%",
          height: 320,
          objectFit: "cover",
        }}
      />
    </Card>
  );
}

export default GalleryImageCard;