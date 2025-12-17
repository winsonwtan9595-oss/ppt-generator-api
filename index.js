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

// ✅ 新增这个：generate-video
app.post('/generate-video', (req, res) => {
  res.json({
    success: true,
    message: 'generate-video endpoint is working (stub)',
    received: {
      bodyKeys: Object.keys(req.body || {})
    }
  });
});

app.get('/', (req, res) => {
  res.send('PPT Generator API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
