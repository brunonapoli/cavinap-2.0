"use client";

import { titulos, datosBipolar, datosTripolar, datosTetrapolar } from '@/utils/datosSub';

import Footer from '../components/Footer';
import Bar from '../components/Bar';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody, Box } from '@mui/material';

export default function subte() {
    return (
        <>
            <Bar posicion={2} posicionTabIndicator={64 * 3} />
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}> Subterráneos </Typography>
                <Typography variant='h7' paragraph>
                    CABLES SUBTERRÁNEOS O CABLES DE ENERGÍA AISLADOS CON DIELÉCTRICOS SÓLIDO
                </Typography>
                <Typography variant='h7' paragraph>
                    EXTRUIDOS PARA TENSIONES NOMINALES HASTA 1,1 KV CERTIFICADOS SEGÚN NORMA IRAM 2178/04
                </Typography>
                <TableContainer>
                    <Table sx={{ mb: 3 }}>

                        <TableHead sx={{ backgroundColor: 'black', border: '1px solid grey' }}>
                            <TableRow>
                                {titulos.map((titulo, index) => (
                                    <TableCell align='center' key={index}>
                                        <Typography variant='h8' color={'white'}>
                                            {titulo}
                                        </Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h7' color={'white'} sx={{fontSize: '2rem'}}>
                                        Bipolar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: 'white' }}>
                            {datosBipolar.map((datos) => (
                                <TableRow>
                                    {datos.map((datoBipolar, index) => (
                                        (datoBipolar == "2x1,5") || (datoBipolar == "2x2,5") || (datoBipolar == "2x4") || (datoBipolar =="2x6") || (datoBipolar =="2x10") ?
                                            <TableCell align='center' sx={{ fontSize: '1.4rem', border: '1px solid grey', fontWeight: 'bold' }} key={index}>
                                                {datoBipolar}
                                            </TableCell>
                                            :
                                            <TableCell align='center' sx={{ fontSize: '1.2rem', border: '1px solid grey' }} key={index}>
                                                {datoBipolar}
                                            </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>

                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h7' color={'white'} sx={{fontSize: '2rem'}}>
                                        Tripolar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: 'white' }}>
                            {datosTripolar.map((datos) => (
                                <TableRow>
                                {datos.map((datoTripolar, index) => (
                                    (datoTripolar == "3x1,5") || (datoTripolar == "3x2,5") || (datoTripolar == "3x4") || (datoTripolar =="3x6") || (datoTripolar =="3x10") ?
                                        <TableCell align='center' sx={{ fontSize: '1.4rem', border: '1px solid grey', fontWeight: 'bold' }} key={index}>
                                            {datoTripolar}
                                        </TableCell>
                                        :
                                        <TableCell align='center' sx={{ fontSize: '1.2rem', border: '1px solid grey' }} key={index}>
                                            {datoTripolar}
                                        </TableCell>
                                ))}
                            </TableRow>
                            ))}
                        </TableBody>

                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h7' color={'white'} sx={{fontSize: '2rem'}}>
                                        Tetrapolar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: 'white' }}>
                            {datosTetrapolar.map((datos) => (
                                <TableRow>
                                {datos.map((datoTetrapolar, index) => (
                                    (datoTetrapolar == "4x1,5") || (datoTetrapolar == "4x2,5") || (datoTetrapolar == "4x4") || (datoTetrapolar =="4x6") || (datoTetrapolar =="4x10") ?
                                        <TableCell align='center' sx={{ fontSize: '1.4rem', border: '1px solid grey', fontWeight: 'bold' }} key={index}>
                                            {datoTetrapolar}
                                        </TableCell>
                                        :
                                        <TableCell align='center' sx={{ fontSize: '1.2rem', border: '1px solid grey' }} key={index}>
                                            {datoTetrapolar}
                                        </TableCell>
                                ))}
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Table sx={{ mb: 3 }}>
                    <TableHead sx={{ backgroundColor: 'black', border: '1px solid grey' }}>
                        <TableRow>
                            <TableCell align='center' colSpan={3} sx={{ color: 'white', fontSize: '1.7rem' }}>
                                Colores de conductores aislantes
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ backgroundColor: 'white' }}>
                        <TableRow>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Bipolar
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Fase + Neutro
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Marrón - Celeste
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Tripolar
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Tres fases
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Marrón - Negro - Rojo
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                tetrapolar
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Tres fases + Neutro
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey', fontSize: '1.2rem' }}>
                                Marrón - Negro - Rojo - Celeste
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Box sx={{ mb: 3 }}>
                    <Typography variant='h6' paragraph>
                        - Apto para instalaciones al aire libre por su alta resistencia a los rayos UV.
                    </Typography>
                    <Typography variant='h6' paragraph>
                        - Apto para ser enterrado o tendido sobre bandejas.
                    </Typography>
                    <Typography variant='h6' paragraph>
                        - El color de la vaina es lila o violeta.
                    </Typography>
                    <Typography variant='h6' paragraph>
                        - El PVC utilizado resiste la propagación de la llama ante un incendio. (Norma IRAM 2307)
                    </Typography>
                    <Typography variant='h6' paragraph>
                        - El cobre utilizado responde a la norma IRAM NM 280.
                    </Typography>
                    <Typography variant='h6' paragraph>
                        - El cable se encuentra marcado y señalizado en forma secuencial metro a metro.
                    </Typography>
                    <Typography variant='h6' paragraph>
                        - Sello IRAM 2178 y de Seguridad Eléctrica.
                    </Typography>
                </Box>
            </ Container>
            <Footer posicion={'static'} />
        </>
    );
};