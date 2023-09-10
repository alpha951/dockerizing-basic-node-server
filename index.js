const app = require("express")();

const dotenv = require("dotenv");
dotenv.config();
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port 3000");
});
