const {MongoClient} = require( "mongodb");
const uri = "mongodb+srv://billylin1954:Cracknut4@cluster0.rrsqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new  MongoClient(uri);
const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors');
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// function getDirname(importMetaUrl) {
//   const filename = fileURLToPath(importMetaUrl);
//   return dirname(filename);
// }
// const __dirname = getDirname(import.meta.url);
app.use(cors())
app.use(express.static(path.join(__dirname, "client/public")));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client','src', 'index.html'));
// });

const PORT = process.env.PORT || 3001;

app.use(express.json());
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
      await client.close();
      console.log("Connection closed.");
    }
  }
  res.json({ message: ':)' });
  run()
});
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
  console.log(`Server listening on  ${PORT}`);
});
