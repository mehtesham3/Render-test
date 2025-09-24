import express from "express"
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hii Everyone </h1>&ns<code>~It's Ehtesham</code>");
})

app.listen(3400, () => {
  console.log("Server is running on port no. http://localhost:3400/");
})