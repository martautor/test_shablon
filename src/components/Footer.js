import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '10px 0', backgroundColor: '#f0f0f0' }}>
      <Container>
        <Typography variant="body1" align="center">© 2023 Красивые номера телефонов</Typography>
      </Container>
    </footer>
  );
};

export default Footer;