const express = require("express");
const cors = require('cors')




const app = express();


app.use(cors({
  origin: '*'
}));

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${8000}!`));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));

app.get("/api/notes", (req, res) => {
  res.json({notes:'notes'});
});

