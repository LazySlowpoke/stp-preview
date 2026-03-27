import { Card, CardMedia } from "@mui/material";

interface GalleryImageCardProps {
  image: string;
  alt: string;
  onClick: () => void;
}

function GalleryImageCard({ image, alt, onClick }: GalleryImageCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 2,
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 4,
        },
      }}
    >
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