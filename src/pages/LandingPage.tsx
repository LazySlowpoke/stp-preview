import { Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage(){
      return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Splash Thomson
      </Typography>

      <Stack spacing={2} mt={4}>
        <Button variant='contained' component={Link} to="/dashboard">
            Browse
        </Button>
        <Button variant='contained'>
          Enter
        </Button>
      </Stack>
    </Container>
  );
}

export default LandingPage