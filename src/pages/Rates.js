// src/pages/Rates.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const Rates = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Тарифы</Typography>
      <Typography variant="body1">Все номера имеют фиксированную стоимость. Узнайте больше, обратившись к нам!</Typography>
    </Container>
  );
};

export default Rates;