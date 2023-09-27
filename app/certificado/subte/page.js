"use client";

import Link from 'next/link';
import { Container, Typography, Stack } from '@mui/material';
import Footer from '@/app/components/Footer';
import Bar from '@/app/components/Bar';
import Box from '@mui/material/Box';

export default function CertSubte() {
    return (
        <>
            <Bar posicion={4} />
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}>
                    Certificado Subterráneos
                </Typography>
                <Stack alignItems='center' sx={{ mb: 1 }}>
                    <Link href='/_next/image?url=%2FcertificadoSubte.jpg&w=750&q=75' target={'blank'}>
                        <Box
                            component="img"
                            sx={{
                                height: { xs: 451, sm: 739, md: 902 },
                                width: { xs: 330, sm: 508, md: 660 }
                            }}
                            alt="Foto del certificado del Subterráneo"
                            src="/certificadoUnipolar.jpg"
                        />
                    </Link>
                </Stack>
                <Typography variant='h6' paragraph sx={{ textAlign: 'center', mb: 2 }}>
                    *Click en la imagen para mejor resolución.
                </Typography>
            </ Container>
            <Footer posicion={'static'} />
        </>
    );
};