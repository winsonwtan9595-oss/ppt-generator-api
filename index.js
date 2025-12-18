const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

app.post('/generate-ppt', (req, res) => {
  const { topic, content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Missing content' });
  }

  res.json({
    success: true,
    topic,
    message: 'PPT request received',
  });
});

// ✅ 支持 form-data + binary（接收文件）
app.post('/generate-video', upload.any(), (req, res) => {
  const files = (req.files || []).map(f => ({
    fieldname: f.fieldname,
    originalname: f.originalname,
    mimetype: f.mimetype,
    size: f.size,
  }));

  res.json({
    success: true,
    message: 'generate-video endpoint is working (uploaded files received)',
    body: req.body,
    files,
  });
});

app.get('/', (req, res) => {
  res.send('PPT Generator API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
