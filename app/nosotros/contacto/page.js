"use client";

import Footer from '@/app/components/Footer';
import Bar from '@/app/components/Bar';
import { Container, Typography, Grid, Stack, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

export default function contacto() {
    return (
        <>
            <Bar posicion={6} posicionTabIndicator={64 * 7} />
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}> Contacto </Typography>
                <Typography variant='h5' sx={{ mb: 3, textAlign: 'center' }}>Para mayor informacion nos puede contactar de las siguientes maneras:</Typography>

                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent >
                                <Stack direction='column' alignItems='center' gap={1}>
                                    <Typography variant='h5'>
                                        <PhoneIcon sx={{ fontSize: 30, position: 'relative', top: 6, mr: .5 }} />
                                        Teléfono:
                                    </Typography>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}> 4753 - 2919</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Stack direction='column' alignItems='center' sx={{ textAlign: 'center' }} gap={1}>
                                    <Typography variant='h5' sx={{ textAlign: 'center' }}>
                                        <EmailIcon sx={{ fontSize: 30, position: 'relative', top: 6, mr: .5 }} />
                                        Mail:
                                    </Typography>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>info@cavinap.com.ar</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent='center' sx={{ mt: 1, mb: 15 }}>
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardContent>
                                <Stack direction='column' alignItems='center' gap={1}>
                                    <Typography variant='h5' sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                                        <QueryBuilderIcon sx={{ fontSize: 30, mr: .5 }} style={{ position: 'relative', top: 6 }} />
                                        Lunes a Viernes
                                    </Typography>
                                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        08:30 hs. a 12:00 hs.
                                    </Typography>
                                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        -
                                    </Typography>
                                    <Typography variant='h5' sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
                                        13:30 hs. a 16:00 hs
                                    </Typography>
                                    <Typography variant='h5' sx={{ textAlign: 'center' }}>
                                        Sábados y Feriados:
                                    </Typography>
                                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        CERRADOS
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </ Container>
            <Footer posicion={'fixed'} />
        </>
    );
};