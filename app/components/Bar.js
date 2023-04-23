"use client";
import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // main: '#E80C0C',
            main: 'rgba(183, 18, 52)'
        },
        secondary: {
            main: '#FFBE15'
        }
    },
});

function LinkTab(props) {
    return (
        <Tab
            component={Link}
            // onClick={(event) => {
            //     event.preventDefault();
            // }}
            {...props}
        />
    );
}

export default function Bar({posicion}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    {/* <Box display='flex' justifyContent={'center'} width={'100%'}> */}
                        {/* <Box> */}
                    <Tabs
                        // value={value}
                        value={posicion}
                        // onChange={handleChange}
                        indicatorColor="secondary"
                        // textColor="secondary"
                        textColor="inherit"
                        // variant="scrollable"
                        scrollButtons='auto'
                        variant='fullWidth'
                        aria-label="full width tabs example"
                    >
                        <LinkTab label="Inicio" href="#" />
                        <LinkTab label="Unipolares" href="/unipolar" />
                        <LinkTab label="Subterráneos" href="/subte" />
                        <LinkTab label="Certificado Unipolares" href="/certificado/unipolar" />
                        <LinkTab label="Certificado Subterráneos" href="/certificado/subte" />
                        <LinkTab label="Calidad" href="/nosotros/calidad" />
                        <LinkTab label="Contacto" href="/nosotros/contacto" />
                        <LinkTab label="Nuestra historia" href="/nosotros/historia" />
                    </Tabs>

                    {/* </Box> */}
                </AppBar>
            </ThemeProvider>
        </>
    )
};