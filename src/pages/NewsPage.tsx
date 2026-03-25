import { Typography } from "@mui/material";
import AppLayout from "../components/shared/AppLayout";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";

function NewsPage() {
  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          title="News"
          subtitle="Latest updates and announcements."
        />

        <Typography variant="body1" color="text.secondary">
          News não implementada.
        </Typography>
      </PageContainer>
    </AppLayout>
  );
}

export default NewsPage;