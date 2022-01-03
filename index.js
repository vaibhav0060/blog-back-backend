const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Blogs/blogs");
// Parse JSON
app.use(express.json());
///route
app.use("/api/v1/blogs", router);
// Use CORS
// const cors = require('cors');
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
/// IMgaes ///
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

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
