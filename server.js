const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

let count = 0;

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/', (req, res) => {
  count++;
  res.send(`
    <h1>Hello from Docker!</h1>
    <p>Hostname: <b>${os.hostname()}</b></p>
    <p>Visits: <b>${count}</b></p>
    <p><a href="/health">/health</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});