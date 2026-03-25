import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 4 },
        py: 4,
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
}

export default PageContainer;