import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryList from "../components/gallery/GalleryList";
import AppLayout from "../components/shared/AppLayout";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";
import { getAllGalleries, type Gallery } from "../services/galleryService";

function GalleryPage() {
  const { gallerySlug } = useParams();
  const navigate = useNavigate();

  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isGalleryDetails = Boolean(gallerySlug);

  useEffect(() => {
    async function fetchGalleries() {
      try {
        setLoading(true);
        setError("");

        const data = await getAllGalleries();
        setGalleries(data);
      } catch {
        setError("Failed to load galleries.");
      } finally {
        setLoading(false);
      }
    }

    if (!isGalleryDetails) {
      fetchGalleries();
    }
  }, [isGalleryDetails]);

  function handleOpenGallery(gallerySlug: string) {
    navigate(`/gallery/${gallerySlug}`);
  }

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          title={isGalleryDetails ? gallerySlug! : "Gallery"}
          subtitle={
            isGalleryDetails
              ? "Gallery details not implemented yet."
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

        {!isGalleryDetails && loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {!isGalleryDetails && error && (
          <Alert severity="error">{error}</Alert>
        )}

        {!isGalleryDetails && !loading && !error && (
          <GalleryList
            galleries={galleries}
            onOpenGallery={handleOpenGallery}
          />
        )}

        {isGalleryDetails && <GalleryGrid images={[]} />}
      </PageContainer>
    </AppLayout>
  );
}

export default GalleryPage;