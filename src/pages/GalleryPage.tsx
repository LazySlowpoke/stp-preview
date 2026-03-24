import { Button } from "@mui/material";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryGrid from "../components/gallery/GalleryGrid";
import AppLayout from "../components/shared/AppLayout";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";
import { getImagesByFolder } from "../utils/galleryImages";

function GalleryPage() {
  const { folderName } = useParams();
  const navigate = useNavigate();

  const images = useMemo(() => {
    if (!folderName) return [];
    return getImagesByFolder(folderName);
  }, [folderName]);

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          title={folderName || "Gallery"}
          subtitle="Visualize as imagens desta galeria."
          action={
            <Button variant="contained" onClick={() => navigate("/dashboard")}>
              Back
            </Button>
          }
        />

        <GalleryGrid images={images} />
      </PageContainer>
    </AppLayout>
  );
}

export default GalleryPage;