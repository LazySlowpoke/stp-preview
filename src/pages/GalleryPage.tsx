import { Container } from "@mui/material";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { getImagesByFolder } from "../utils/galleryImages";

function GalleryPage() {
  const { folderName } = useParams();
  const navigate = useNavigate();

  const images = useMemo(() => {
    if (!folderName) return [];
    return getImagesByFolder(folderName);
  }, [folderName]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <GalleryHeader
        title={folderName || "Gallery"}
        onBack={() => navigate("/dashboard")}
      />

      <GalleryGrid images={images} />
    </Container>
  );
}

export default GalleryPage;