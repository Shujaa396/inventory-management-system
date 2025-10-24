const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let inventory = [
    { id: 1, name: 'Laptop', quantity: 10, price: 1200 },
    { id: 2, name: 'Mouse', quantity: 50, price: 20 }
];

app.get('/api/inventory', (req, res) => {
    res.json({ success: true, data: inventory });
});

app.post('/api/inventory', (req, res) => {
    const item = req.body;
    inventory.push(item);
    res.json({ success: true, data: item });
});

app.listen(5000, () => {
    console.log('Backend running on http://localhost:5000');
});