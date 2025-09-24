import express from "express"
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hii Everyone </h1>&ns<code>~It's Ehtesham</code>");
})

const port = 3400;

app.listen(port, () => {
  console.log(`Server is running on port no. http://localhost:${port}/`);
})