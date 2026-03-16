import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import GalleryList from "../components/dashboard/GalleryList";
import { getGalleries } from "../utils/galleryImages";

function DashboardPage() {
  const navigate = useNavigate();
  const galleries = getGalleries();

  function handleOpenGallery(folderName: string) {
    navigate(`/gallery/${folderName}`);
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <DashboardHeader />
      <GalleryList
        galleries={galleries}
        onOpenGallery={handleOpenGallery}
      />
    </Container>
  );
}

export default DashboardPage;