const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'quran_app_page.html'));
});

app.listen(port, () => {
  console.log(`الخادم يعمل على http://localhost:${port}`);
});