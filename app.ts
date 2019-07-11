const express = require('express');
const app = express();
const port = 3000;

const code = `ServerID: ${Math.random()}`;

app.get('/', (req, res) => res.send(`Hello World from ${code}\n`));

// Health Check for Kubernetes Liveness Probe
app.get('/health', (req, res) => res.status(200).send());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
