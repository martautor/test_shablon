import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>О нас</Typography>
      <Typography variant="body1">Мы специализируемся на продаже красивых номеров телефонов с 2020 года.</Typography>
    </Container>
  );
};

export default About;