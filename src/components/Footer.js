import React from 'react';
import { Container, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '10px 0', backgroundColor: green[200] }}>
      <Container>
        <br/>
        <Typography variant="body1" align="center">Все права защищены.</Typography>
        <Typography variant="body1" align="center">© 2023 NEWSIM</Typography>
        <br/>
      </Container>
    </footer>
  );
};

export default Footer;