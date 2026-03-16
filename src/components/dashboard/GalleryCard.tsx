import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

interface GalleryCardProps {
  folderName: string;
  coverImage: string;
  onClick: () => void;
}

function GalleryCard({ folderName, coverImage, onClick }: GalleryCardProps) {
  return (
    <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          image={coverImage}
          alt={folderName}
          sx={{
            height: 260,
            objectFit: "cover",
          }}
        />

        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {folderName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GalleryCard;