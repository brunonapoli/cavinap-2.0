"use client";

import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody } from '@mui/material';

// import {medidas, titulos, diametro, tipo, espesor, diametroExt, resistencia, corriente, peso, fusible} from '../../utils/datos';
import {datos, titulos} from '../../utils/datos';

export default function  Unipolar() {
    return (
        <>
        <Container sx={{mt:4}}>
            <TableContainer>
                <Table>
                    <TableHead sx={{backgroundColor: 'black'}}>
                        <TableRow>
                            {titulos.map((titulo, index) => (
                                <TableCell align='center'>
                                    <Typography variant='h7' sx={{color: 'white'}}>
                                        {titulo}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {datos.map((dato, index) => (
                                dato.map((valor) => (
                                <TableCell align='center'>
                                    <Typography variant='h7' sx={{color: 'black'}}>
                                        {valor}
                                    </Typography>
                                </TableCell>
                                ))
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </>
    );
};