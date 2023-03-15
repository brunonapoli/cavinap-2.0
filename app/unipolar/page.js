"use client";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography } from '@mui/material';

const medidas = [
    0.75, 1.00, 1.50, 2.50, 4, 6, 10
]

export default function  Unipolar() {
    return (
        <>
        <Container maxWidth="md">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {medidas.map((numero, index) => (
                                <TableCell>
                                    <Typography variant='h4'>
                                        {numero}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
        </>
    );
};