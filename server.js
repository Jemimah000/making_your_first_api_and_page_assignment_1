const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
    const dayMessage = "Have a wonderful day!";

    const response = {
        welcomeMessage: welcomeMessage,
        dayMessage: dayMessage,
    };

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
