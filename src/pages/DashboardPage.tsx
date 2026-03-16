import { useNavigate } from "react-router-dom";
import GalleryList from "../components/dashboard/GalleryList";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";
import { getGalleries } from "../utils/galleryImages";

function DashboardPage() {
  const navigate = useNavigate();
  const galleries = getGalleries();

  function handleOpenGallery(folderName: string) {
    navigate(`/gallery/${folderName}`);
  }

  return (
    <PageContainer>
      <PageHeader
        title="Galleries"
        subtitle="Selecione uma galeria para visualizar as imagens."
      />

      <GalleryList
        galleries={galleries}
        onOpenGallery={handleOpenGallery}
      />
    </PageContainer>
  );
}

export default DashboardPage;