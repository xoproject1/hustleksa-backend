const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/jobs', (req, res) => {
  res.json([
    { title: "Restaurant Supervisor – Riyadh", description: "Manage daily operations." },
    { title: "Graphic Designer – Jeddah", description: "Create stunning visuals." },
    { title: "Sales Executive – Dammam", description: "Drive revenue growth." }
  ]);
});

app.listen(3000, () => console.log('Server running on port 3000'));
