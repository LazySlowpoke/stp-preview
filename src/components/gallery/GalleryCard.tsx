import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface GalleryCardProps {
  title: string;
  coverImage?: string | null;
  description?: string | null;
  onClick: () => void;
}

function GalleryCard({
  title,
  coverImage,
  description,
  onClick,
}: GalleryCardProps) {
  return (
    <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          image={coverImage || "https://via.placeholder.com/600x400?text=No+Cover"}
          alt={title}
          sx={{
            height: 260,
            objectFit: "cover",
          }}
        />

        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>

          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GalleryCard;