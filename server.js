const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve root site from project root
app.use(express.static(path.join(__dirname)));

// Serve regular site under /regular
app.use('/regular', express.static(path.join(__dirname, 'regular')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/regular', (req, res) => {
  res.sendFile(path.join(__dirname, 'regular', 'index.html'));
});

app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
