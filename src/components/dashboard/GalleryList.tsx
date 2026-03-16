import Grid from "@mui/material/Grid";
import GalleryCard from "./GalleryCard";

interface GalleryItem {
  folderName: string;
  coverImage: string;
  images: string[];
}

interface GalleryListProps {
  galleries: GalleryItem[];
  onOpenGallery: (folderName: string) => void;
}

function GalleryList({ galleries, onOpenGallery }: GalleryListProps) {
  return (
    <Grid container spacing={4}>
      {galleries.map((gallery) => (
        <Grid key={gallery.folderName} size={{ xs: 12, sm: 6, md: 4 }}>
          <GalleryCard
            folderName={gallery.folderName}
            coverImage={gallery.coverImage}
            onClick={() => onOpenGallery(gallery.folderName)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GalleryList;