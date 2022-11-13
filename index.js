const express = require("express");
const cors = require('cors')




const app = express();
app.use(cors())

app.use((req,res, next)=>{
  res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
  res.setHeader('Access-Control-Allow-Headers',"*");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${8000}!`));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));

app.get("/api/notes", (req, res) => {
  res.json({notes:'notes'});
});

