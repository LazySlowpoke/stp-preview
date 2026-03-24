import { Box } from "@mui/material";
import type { ReactNode } from "react";
import AppSidebar from "./AppSidebar";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <AppSidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;