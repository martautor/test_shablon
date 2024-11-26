import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Добро пожаловать!</Typography>
      <Typography variant="body1">Здесь вы можете найти и приобрести красивые номера телефонов.</Typography>
    </Container>
  );
};

export default Home;