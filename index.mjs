import express from "express";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Welcome to my HOME, Hello world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});