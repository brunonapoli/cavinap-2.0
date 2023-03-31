"use client";

import { titulos, datosBipolar, datosTripolar, datosTetrapolar } from '@/utils/datosSub';

import Footer from '../components/Footer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody, Box } from '@mui/material';

export default function subte() {
    return (
        <>
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
                                    <Typography variant='h7' color={'white'}>
                                        Bipolar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{backgroundColor:'white'}}>
                            {datosBipolar.map((datos) => (
                                <TableRow>
                                    {datos.map((datoBipolar, index) => (
                                        <TableCell align='center' sx={{ border: '1px solid grey' }} key={index}>
                                            {datoBipolar}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>

                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h7' color={'white'}>
                                        Tripolar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{backgroundColor:'white'}}>
                            {datosTripolar.map((datos) => (
                                <TableRow>
                                    {datos.map((datoTripolar, index) => (
                                        <TableCell align='center' sx={{ border: '1px solid grey' }} key={index}>
                                            {datoTripolar}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>

                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h7' color={'white'}>
                                        Tetrapolar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{backgroundColor:'white'}}>
                            {datosTetrapolar.map((datos) => (
                                <TableRow>
                                    {datos.map((datoTetrapolar, index) => (
                                        <TableCell align='center' sx={{ border: '1px solid grey' }} key={index}>
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
                            <TableCell align='center' colSpan={3} sx={{ color: 'white' }}>
                                Colores de conductores aislantes
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor:'white'}}>
                        <TableRow>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Bipolar
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Fase + Neutro
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Marrón - Celeste
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Tripolar
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Tres fases
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Marrón - Negro - Rojo
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                tetrapolar
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
                                Tres fases + Neutro
                            </TableCell>
                            <TableCell align='center' sx={{ border: '1px solid grey' }}>
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