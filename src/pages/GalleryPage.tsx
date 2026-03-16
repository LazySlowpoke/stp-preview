import { Container } from "@mui/material";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryGrid from "../components/gallery/GalleryGrid";

const imageModules = import.meta.glob("../assets/images/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
}) as Record<string, { default: string }>;

const imagePaths = Object.entries(imageModules).map(([path, module]) => {
  const match = path.match(/images\/([^/]+)\/[^/]+$/);

  return {
    path,
    src: module.default,
    folderName: match ? match[1] : "",
  };
});

function GalleryPage() {
  const { folderName } = useParams();
  const navigate = useNavigate();

  const images = useMemo(() => {
    if (!folderName) return [];

    return imagePaths
      .filter((image) => image.folderName === folderName)
      .map((image) => image.src);
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