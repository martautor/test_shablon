import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { green } from '@mui/material/colors';
import myLogo from '../images/logo.png'
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: green[400], padding: 1}}>
        <img src={myLogo} alt="Логотип" style={{ height: '100px', marginRight: '20px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NEWSIM
        </Typography>
        <Button component={Link} to="/" color="inherit">Главная</Button>
        <Button component={Link} to="/about" color="inherit">О нас</Button>
        <Button component={Link} to="/rates" color="inherit">Тарифы</Button>
        <Button component={Link} to="/contact" color="inherit">Контакты</Button>
        <Button component={Link} to="/phone-search" color="inherit">Подбор номера</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;