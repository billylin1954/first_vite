import express, { json } from 'express';

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.redirect('/auth.html');
});
const PORT = 3000;


app.use(json());
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Data received from frontend:', receivedData);

  
  res.json({ message: 'Data received successfully', data: receivedData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
