import Grid from "@mui/material/Grid";
import GalleryImageCard from "./GalleryImageCard";

interface GalleryGridProps {
  images: string[];
  onImageClick: (index: number) => void;
}

function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <Grid container spacing={3}>
      {images.map((image, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <GalleryImageCard
            image={image}
            alt={`Imagem ${index + 1}`}
            onClick={() => onImageClick(index)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GalleryGrid;
