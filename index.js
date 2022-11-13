const express = require("express"); //for install => npm i express




const app = express();

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${8000}!`));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));

app.get("/api/notes", (req, res) => {
  res.json({notes:'notes'});
});

