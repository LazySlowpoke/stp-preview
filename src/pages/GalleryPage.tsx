import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryList from "../components/gallery/GalleryList";
import AppLayout from "../components/shared/AppLayout";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";
import {
  getAllGalleries,
  getGalleryBySlug,
  type Gallery,
} from "../services/galleryService";

function GalleryPage() {
  const { gallerySlug } = useParams();
  const navigate = useNavigate();

  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isGalleryDetails = Boolean(gallerySlug);

  useEffect(() => {
    async function fetchGalleryList() {
      try {
        setLoading(true);
        setError("");
        setSelectedGallery(null);

        const data = await getAllGalleries();
        setGalleries(data);
      } catch {
        setError("Failed to load galleries.");
      } finally {
        setLoading(false);
      }
    }

    async function fetchGalleryDetails() {
      try {
        setLoading(true);
        setError("");
        setGalleries([]);

        const data = await getGalleryBySlug(gallerySlug as string);
        setSelectedGallery(data);
      } catch {
        setError("Failed to load gallery details.");
      } finally {
        setLoading(false);
      }
    }

    if (isGalleryDetails && gallerySlug) {
      fetchGalleryDetails();
    } else {
      fetchGalleryList();
    }
  }, [isGalleryDetails, gallerySlug]);

  function handleOpenGallery(slug: string) {
    navigate(`/gallery/${slug}`);
  }

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          title={
            isGalleryDetails
              ? selectedGallery?.title || "Gallery"
              : "Gallery"
          }
          subtitle={
            isGalleryDetails
              ? selectedGallery?.description || "Gallery details."
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

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {!loading && error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && !isGalleryDetails && (
          <GalleryList
            galleries={galleries}
            onOpenGallery={handleOpenGallery}
          />
        )}

        {!loading && !error && isGalleryDetails && (
          <>
            {selectedGallery?.cover_image && (
              <Box sx={{ mb: 4 }}>
                <img
                  src={selectedGallery.cover_image}
                  alt={selectedGallery.title}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
              </Box>
            )}

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Images not implemented yet.
            </Typography>

            <GalleryGrid images={[]} />
          </>
        )}
      </PageContainer>
    </AppLayout>
  );
}

export default GalleryPage;