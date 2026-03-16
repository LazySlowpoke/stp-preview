import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <Box
      sx={{
        mb: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="bold" gutterBottom={!!subtitle}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>

      {action}
    </Box>
  );
}

export default PageHeader;