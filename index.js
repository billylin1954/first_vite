import { MongoClient } from "mongodb";
const uri = "mongodb+srv://billylin1954:Cracknut4@cluster0.rrsqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
import express, { json } from 'express';

const app = express();

// Serve static files from the "public" directory
//app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.redirect('/auth.html');
});
const PORT = process.env.PORT || 3005;

app.use(json());
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Data received from frontend:', receivedData);
  // async function run() {
  //   try {
  //     await client.connect();
  //     console.log("Connected successfully to MongoDB");
   
  //     const database = client.db('billCo');
  //     const collection = database.collection('stuff');
  //     const clicks=receivedData.clicks
  //     const user = receivedData.user
  //     const password = receivedData.password
  //     const ramenRate=receivedData.ramenRate
  //     // Insert the document into MongoDB
  //     await collection.insertOne({ user, password ,clicks,ramenRate});
  //     console.log("Data inserted:", { user, password });
   
   
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     run()
  //     await client.close();
  //     console.log("Connection closed.");
  //   }
  // }
  res.json({ message: 'Data received successfully', data: receivedData });
  // run()
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
