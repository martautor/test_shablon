import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Красивые номера телефонов
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