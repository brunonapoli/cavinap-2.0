"use client";

import {Typography, Box, Toolbar, Stack, AppBar } from '@mui/material';

export default function Footer({ posicion }) {
    return (
        <>
            <Box sx={{ width: '100%', bottom: '0', position: `${posicion}` }}>
                <AppBar position='static' color='inherit' sx={{ alignItems: 'center' }}>
                    <Toolbar>
                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h7' sx={{ textAlign: 'center' }}>
                                Copyright © 2023 Cavinap - All Rights Reserved
                            </Typography>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};