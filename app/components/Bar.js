"use client";
import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

export default function Bar() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        // textColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <LinkTab label="Unipolares" href="/unipolar" />
                        <LinkTab label="Subterráneos" href="/subte" />
                        <LinkTab label="Certificado Unipolares" href="/certificado/unipolar" />
                        <LinkTab label="Certificado Subterráneos" href="/certificado/subte" />
                        <LinkTab label="Calidad" href="/nosotros/calidad" />
                        <LinkTab label="Contacto" href="/nosotros/contacto" />
                        <LinkTab label="Nuestra historia" href="/nosotros/historia" />
                    </Tabs>
                </AppBar>
            </ThemeProvider>
        </>
    )
};