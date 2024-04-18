import React from 'react';
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CssBaseline from "@mui/material/CssBaseline";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Stack from '@mui/material/Stack';

const Register = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '65vh', mt: 10 }} component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ width: '100%' }}>
                <Stack justifyContent="center" direction="row" spacing={2} sx={{
                    m: "auto",
                    "& .MuiSvgIcon-root": {
                        fontSize: "8rem",
                    },
                }}>
                    <HowToRegIcon />
                </Stack>
                <Typography variant="h6" color="text.primary" sx={{ textAlign: 'center', mt: 2 }}>
                    Welcome!<br /> Please tell us who you are:
                </Typography>
                <Box sx={{ display: 'flex',flexDirection:'row', gap:5   , alignItems:'center', mt:2, ml:5}}>
                <Button component={Link} to="/people" variant="contained" color="primary">
                        <Tab label="People"/>
                    </Button>
                <Button component={Link} to="/business" variant="contained" color="primary">
                        <Tab label="Business" />
                </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
