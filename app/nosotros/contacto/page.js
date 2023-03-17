"use client";

import { Container, Typography, Grid, Stack, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function contacto() {
    return (
        <>
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}> Contacto </Typography>
                <Typography variant='h5' sx={{ mb: 3 }}>Para mayor informacion nos puede contactar de las siguientes maneras:</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent  >
                                <Stack direction='row' alignItems='center' gap={1}>
                                    <PhoneIcon sx={{ fontSize: 30 }} />
                                    <Typography variant='h5'> Teléfono:</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}> 4753 - 2919</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Stack direction='row' alignItems='center' gap={1}>
                                    <EmailIcon sx={{ fontSize: 30 }} />
                                    <Typography variant='h5'> E-Mail: </Typography>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>info@cavinap.com.ar</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography variant='h5' sx={{ mb: 3, mt: 4, fontWeight: 'bold' }}>Lunes a Viernes de 09:00 hs. a 16:00 hs.</Typography>
            </ Container>
        </>
    );
};