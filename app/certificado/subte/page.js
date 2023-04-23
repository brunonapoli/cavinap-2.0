"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Container, Typography, Stack } from '@mui/material';
import Footer from '@/app/components/Footer';
import Bar from '@/app/components/Bar';

export default function CertSubte() {
    return (
        <>
            <Bar posicion={4} />
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}>
                    Certificado Subterráneos
                </Typography>
                <Stack alignItems='center' sx={{ mb: 3 }}>
                    <Link href='/_next/image?url=%2FcertificadoSubte.jpg&w=750&q=75' target={'blank'}>
                        <Image
                            src="/certificadoSubte.jpg"
                            alt='Foto del certificado del Subterráneo'
                            width={660}
                            height={902}
                        />
                    </Link>
                </Stack>
            </ Container>
            <Footer posicion={'static'} />
        </>
    );
};