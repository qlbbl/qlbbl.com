// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 1111;

// Automatically checks for .html files (e.g., /about -> about.html)
app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html', 'htm']
}));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

