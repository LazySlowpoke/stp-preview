import {
  Box,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface GalleryImageModalProps {
  open: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function GalleryImageModal({
  open,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryImageModalProps) {
  if (!images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: -8,
              right: -8,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={onPrevious}
            sx={{
              position: "absolute",
              left: 8,
              color: "white",
              zIndex: 2,
              bgcolor: "rgba(0,0,0,0.3)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src={currentImage}
              alt={`Imagem ${currentIndex + 1}`}
              sx={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 2,
                boxShadow: 6,
              }}
            />

            <Typography color="white" variant="body1">
              {currentIndex + 1} / {images.length}
            </Typography>
          </Box>

          <IconButton
            onClick={onNext}
            sx={{
              position: "absolute",
              right: 8,
              color: "white",
              zIndex: 2,
              bgcolor: "rgba(0,0,0,0.3)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default GalleryImageModal;