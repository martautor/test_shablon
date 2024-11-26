// src/pages/Contact.js

import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Контакты
            </Typography>
            <Typography variant="h6">Свяжитесь с нами</Typography>
            <form>
                <TextField label="Ваше имя" fullWidth margin="normal" required />
                <TextField label="Ваш email" fullWidth margin="normal" required type="email" />
                <TextField label="Сообщение" fullWidth margin="normal" required multiline rows={4} />
                <Button variant="contained" color="primary" type="submit">Отправить</Button>
            </form>
        </Container>
    );
};

export default Contact;