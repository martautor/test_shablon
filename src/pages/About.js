import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                О нас
            </Typography>
            <Typography variant="h6">Наша миссия</Typography>
            <Typography>
                Мы стремимся сделать покупку красивых номеров телефонов простой и доступной для каждого. 
                У нас огромный выбор уникальных номеров, которые помогут выделиться в море однотипных предложений.
            </Typography>
            <Typography variant="h6" mt={2}>Наша команда</Typography>
            <List>
                <ListItem>Профессионалы с многолетним опытом в сфере телекоммуникаций</ListItem>
                <ListItem>Маркетологи, работающие над уникальными предложениями</ListItem>
                <ListItem>Специалисты по обслуживанию клиентов</ListItem>
            </List>
        </Container>
    );
};

export default About;