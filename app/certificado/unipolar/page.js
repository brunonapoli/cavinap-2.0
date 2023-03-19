"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Container, Typography, Stack } from '@mui/material';

export default function certificadoUnipolar() {
    return (
        <>
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}>
                    Certificado Unipolares
                </Typography>
                <Stack alignItems='center'>
                    <Link href='/_next/image?url=%2FcertificadoUnipolar.jpg&w=750&q=75'>
                        <Image
                            src="/certificadoUnipolar.jpg"
                            alt='Foto del certificado del Unipolar'
                            width={680}
                            height={902}
                        />
                    </Link>
                </Stack>
            </ Container>
        </>
    );
};