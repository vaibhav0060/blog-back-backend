const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Blogs/blogs");
// Parse JSON
app.use(express.json());
///route
app.use("/api/v1/blogs", router);
// Use CORS
app.use(cors());
/// IMgaes ///
const image = "http://localhost:3000/static/media/fitMain.35faee75.jpg";
// const image ={ link : https://vaibhav-blog-app.netlify.app/static/media/fitMain.35faee75.jpg ; }
app.get("/api/img/", (req, res) => {
  res.json("hello");
  res.end();
});
app.get("/", (req, res) => {
  res.json("hello welcome");
  res.end();
});
// app.get("/:id", (req, res) => {
//   const id = req.params["id"];
//   res.write(`<h1> hello ${id} </h1>`);
//   res.end();
// });

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(` Server running on : ${port}`));
