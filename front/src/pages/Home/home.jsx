import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://byteworks.cl">
        ByteWorks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '50px',  minHeight: '69vh', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Byteworks
        </Typography>
        <Typography variant="body1" paragraph>
          We look forward to working with you!
        </Typography>
        <Button component={Link} to="/register" variant="contained" color="primary">
            <Tab label="Start Now!" />
          </Button>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
