import { Container } from "@mui/material";
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {children}
    </Container>
  );
}

export default PageContainer;