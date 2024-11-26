const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const phoneNumbers = [
    { id: 1, number: "+7 900 123 45 67" },
    { id: 2, number: "+7 905 234 56 78" },
    { id: 3, number: "+7 911 345 67 89" },
    { id: 4, number: "+7 921 456 78 90" },
];

// Поиск номера по частичному совпадению
app.get('/api/phone-numbers', (req, res) => {
    const { query } = req.query;
    const filteredNumbers = phoneNumbers.filter(num => num.number.includes(query));
    res.json(filteredNumbers);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});