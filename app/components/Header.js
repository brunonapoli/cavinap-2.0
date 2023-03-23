"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='inherit'>
                    <Toolbar sx={{ mt: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
                            <Link href="/">
                                <Image src="/logo.png" alt='Foto' width="210" height="70" ml="60" />
                            </Link>
                        </Typography>
                        <Typography variant='h5' sx={{ mr: 6 }}>
                            Fábrica de conductores eléctricos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
};