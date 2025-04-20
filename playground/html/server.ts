import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve il CSS generato
app.use('/dist', express.static(path.resolve(__dirname, '../../dist')));

// Serve la cartella con HTML statico
app.use('/', express.static(__dirname + '/public'));

// Index route (opzionale, già servita da sopra)
app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Preview attiva su http://localhost:${PORT}`);
});
