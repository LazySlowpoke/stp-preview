import { Button } from "@mui/material";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryList from "../components/dashboard/GalleryList";
import AppLayout from "../components/shared/AppLayout";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";
import { getGalleries, getImagesByFolder } from "../utils/galleryImages";

function GalleryPage() {
  const { folderName } = useParams();
  const navigate = useNavigate();

  const galleries = useMemo(() => getGalleries(), []);
  const images = useMemo(() => {
    if (!folderName) return [];
    return getImagesByFolder(folderName);
  }, [folderName]);

  function handleOpenGallery(selectedFolderName: string) {
    navigate(`/gallery/${selectedFolderName}`);
  }

  const isGalleryDetails = Boolean(folderName);

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          title={isGalleryDetails ? folderName! : "Gallery"}
          subtitle={
            isGalleryDetails
              ? "Visualize as imagens desta galeria."
              : "Selecione uma galeria para visualizar as imagens."
          }
          action={
            isGalleryDetails ? (
              <Button variant="contained" onClick={() => navigate("/gallery")}>
                Back
              </Button>
            ) : undefined
          }
        />

        {isGalleryDetails ? (
          <GalleryGrid images={images} />
        ) : (
          <GalleryList
            galleries={galleries}
            onOpenGallery={handleOpenGallery}
          />
        )}
      </PageContainer>
    </AppLayout>
  );
}

export default GalleryPage;