import { Typography } from "@mui/material";
import AppLayout from "../components/shared/AppLayout";
import PageContainer from "../components/shared/PageContainer";
import PageHeader from "../components/shared/PageHeader";

function AboutPage() {
  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          title="About"
          subtitle="Learn more about this project."
        />

        <Typography variant="body1" color="text.secondary">
          About não implementado.
        </Typography>
      </PageContainer>
    </AppLayout>
  );
}

export default AboutPage;