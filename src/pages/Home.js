import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const items = [
    { id: 1, image: "https://via.placeholder.com/800x300?text=Красивая+комбинация", caption: "Красивая комбинация" },
    { id: 2, image: "https://via.placeholder.com/800x300?text=Элегантные+номера", caption: "Элегантные номера" },
    { id: 3, image: "https://via.placeholder.com/800x300?text=Ваш+идеальный+номер", caption: "Ваш идеальный номер" },
];

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center" style={{ marginTop: '20px' }}>
                Добро пожаловать на наш сайт!
            </Typography>
            <br/>
            <Typography variant="body1">
                Мы предлагаем широкий выбор красивых номеров для связи. Выберите уникальный номер, который будет выделять вас на фоне остальных.
            </Typography>
            <br/><br/>
            <Carousel>
                {items.map((item) => (
                    <img key={item.id} src={item.image} alt={item.caption} style={{ width: '100%', borderRadius: '8px' }} />
                ))}
            </Carousel>
        </Container>
    );
};

export default Home;