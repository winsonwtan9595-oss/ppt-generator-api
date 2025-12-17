const express = require('express');
const app = express();

app.use(express.json());

app.post('/generate-ppt', (req, res) => {
  const { topic, content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Missing content' });
  }

  res.json({
    success: true,
    topic,
    message: 'PPT request received'
  });
});

app.get('/', (req, res) => {
  res.send('PPT Generator API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
