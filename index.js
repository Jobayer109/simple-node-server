const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
  { id: 1, name: "Taima", email: "taima@gmail.com" },
  { id: 2, name: "Tanvir", email: "tanvir@gmail.com" },
  { id: 3, name: "Tahmi", email: "tahmi@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("Node Server is Running");
});

app.listen(port, () => {
  console.log(`Node server running on port: ${port}`);
});
