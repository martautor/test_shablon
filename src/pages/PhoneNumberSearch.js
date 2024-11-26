import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const PhoneNumberSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/phone-numbers?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching phone numbers:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Подбор номера телефона</Typography>
      <TextField
        label="Введите номер или его часть"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>Поиск</Button>

      <List>
        {results.map((number) => (
          <ListItem key={number.id}>
            <ListItemText primary={number.number} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PhoneNumberSearch;