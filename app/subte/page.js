"use client";

import { titulos } from '@/utils/datosSub';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

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
                    <Table>
                        <TableHead sx={{ backgroundColor: 'black', border: '1px solid grey' }}>
                            <TableRow>
                            {titulos.map((titulo) => (
                                <TableCell align='center'>
                                    <Typography variant='h8' color={'white'}> {titulo} </Typography>
                                </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h5' color={'white'}> Bipolar </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h5' color={'white'}> Tripolar </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead sx={{ backgroundColor: '#000010', border: '1px solid grey' }}>
                            <TableRow>
                                <TableCell align='center' colSpan={titulos.length}>
                                    <Typography variant='h5' color={'white'}> Tetrapolar </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </ Container>
        </>
    );
};