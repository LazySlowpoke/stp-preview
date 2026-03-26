import Grid from "@mui/material/Grid";
import GalleryCard from "./GalleryCard";

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  created_at: string;
}

interface GalleryListProps {
  galleries: GalleryItem[];
  onOpenGallery: (galleryId: string) => void;
}

function GalleryList({ galleries, onOpenGallery }: GalleryListProps) {
  return (
    <Grid container spacing={4}>
      {galleries.map((gallery) => (
        <Grid key={gallery.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <GalleryCard
            title={gallery.title}
            description={gallery.description}
            coverImage={gallery.cover_image}
            onClick={() => onOpenGallery(gallery.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GalleryList;