import express,{json} from 'express';

const app = express();
//const { readFile } = promises;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the login function
app.get('/login', (req, res) => {
    res.redirect('/auth.html');
});
const PORT = 3000;

// Middleware to parse JSON data sent from the frontend
app.use(json());
// Route to receive data from the frontend
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Data received from frontend:', receivedData);

  // Process the data as needed
  
  // Send a response back to the frontend
  res.json({ message: 'Data received successfully', data: receivedData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
