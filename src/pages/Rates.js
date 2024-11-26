import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Rates = () => {
    const rates = [
        { id: 1, number: "+7 900 123 45 67", price: "15000 руб." },
        { id: 2, number: "+7 905 234 56 78", price: "18000 руб." },
        { id: 3, number: "+7 911 345 67 89", price: "20000 руб." },
        { id: 4, number: "+7 921 456 78 90", price: "25000 руб." },
    ];

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Тарифы
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Номер телефона</TableCell>
                            <TableCell>Цена</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rates.map((rate) => (
                            <TableRow key={rate.id}>
                                <TableCell>{rate.number}</TableCell>
                                <TableCell>{rate.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Rates;