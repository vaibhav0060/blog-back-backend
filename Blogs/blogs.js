const express = require("express");
const router = express.Router();
const cors = require("cors");

app.use(cors());
/// IMgaes ///
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const blogs = [
  {
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/fitMain.35faee75.jpg",
    msg: "hello its blogs page ",
  },
  {
    id: 1,
    category: "Bollywood",
    // image: <img src={b2} alt="back" />,
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
];
router.get("/", (req, res) => {
  //   res.json("<h1>all blogs  </h1>");
  res.status(200).send(blogs);
  // res.json(blogs);
  //   res.json(`${blogs}`);
  res.end();
});
module.exports = router;
