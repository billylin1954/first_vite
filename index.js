import { MongoClient } from "mongodb";
const uri= process.env.URI;
const client = new MongoClient(uri);
import express, { json } from 'express';
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(json());
app.post('/api', (req, res) => {
  const receivedData = req.body;
  console.log('Data received from frontend:', receivedData);
  async function run() {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB");
   
      const database = client.db('billCo');
      const collection = database.collection('stuff');
      const clicks=receivedData.clicks
      const user = receivedData.user
      const password = receivedData.password
      const ramenRate=receivedData.ramenRate
      // Insert the document into MongoDB
      await collection.insertOne({ user, password ,clicks,ramenRate});
      console.log("Data inserted:", { user, password });
    } catch (error) {
      console.error("Error:", error);
    } finally {
    //  run()
      await setTimeout(() => {
        client.close();
      }, 5); 
        
      console.log("Connection closed.");
    }
  }
  res.json({ message: ':)' });
  if((receivedData.user && receivedData.password)!="")
  run()
});
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
  console.log(`Server listening on  ${PORT}`);
});
