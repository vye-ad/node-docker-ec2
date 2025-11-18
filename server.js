const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

let count = 0;

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/', (req, res) => {
  count++;
  res.send(`
    <h1>Hello from Docker! Deployed by Vye-Ad</h1>
    <p>Hostname: <b>${os.hostname()}</b></p>
    <p>Visits: <b>${count}</b></p>
    <p>Deployed: <b>${new Date().toLocaleString()}</b></p>
    <hr>
    <small>CI/CD with GitHub Actions + GHCR + EC2</small>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});