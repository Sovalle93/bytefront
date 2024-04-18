import React from 'react';
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'
import CssBaseline from "@mui/material/CssBaseline";
import HandleJobs from './Projects/DeleteJobs';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import Stack from '@mui/material/Stack';


const Enterprise = () => {

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '59vh', mt: 10 }} component="main" maxWidth="xs">
    <CssBaseline />
    <Box sx={{ width: '100%' }}>
        <Stack justifyContent="center" direction="row" spacing={2} sx={{
            m: "auto",
            "& .MuiSvgIcon-root": {
                fontSize: "8rem",
            },
        }}>
            <AdfScannerIcon />
        </Stack>
        <Typography variant="h6" color="text.primary" sx={{ textAlign: 'center', mt: 2 }}>
            Welcome!<br /> Please tell what do you want to do:
        </Typography>
        <Box sx={{ display: 'flex',flexDirection:'row', gap:5   , alignItems:'center', mt:2, ml:5}}>
            <Button component={Link} to="/searchapp" variant="contained" color="primary">
                <Tab label="Search Applicants" />
            </Button>
            <Button component={Link} to="/createjobs" variant="contained" color="primary">
                <Tab label="Create Job" />
            </Button>
        </Box>
    </Box>
    <HandleJobs/>
</Container>
  );
};

export default Enterprise;


