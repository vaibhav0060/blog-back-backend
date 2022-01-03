const express = require("express");
const router = express.Router();
// const cors = require("cors");

// router.use(cors());
// /// IMgaes ///
// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
router.use(cors(corsOptions));
let blogs = [
  {
    id: 1,
    category: "Bollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b2.2f7ad254.jpg",
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 2,
    category: "Technology",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/techMain.7dcc2ce2.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 3,
    category: "Hollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/hm.ecffabaa.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },

  {
    id: 4,
    category: "Fitness",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/fitMain.35faee75.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 5,
    category: "Food",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/foodMain.0a4e9e5c.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 20 2021",
  },
  {
    id: 6,
    category: "Bollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b3.325868f8.jpg",
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 7,
    category: "Technology",
    image: "https://vaibhav-blog-app.netlify.app/static/media/t1.41020f26.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 8,
    category: "Hollywood",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/hollywoodSub.20c2f80b.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },

  {
    id: 9,
    category: "Fitness",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/fitSub.4300d68f.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 10,
    category: "Food",
    image: "https://vaibhav-blog-app.netlify.app/static/media/fe.47c761c1.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 21 2021",
  },
  {
    id: 11,
    category: "Bollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b1.54b21f26.jfif",
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 12,
    category: "Technology",
    image: "https://vaibhav-blog-app.netlify.app/static/media/t2.2275c028.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 13,
    category: "Hollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/h1.2963e54b.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },

  {
    id: 14,
    category: "Fitness",
    image: "https://vaibhav-blog-app.netlify.app/static/media/fi1.36a44612.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 15,
    category: "Food",
    image: "https://vaibhav-blog-app.netlify.app/static/media/f1.babd5d81.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 22 2021",
  },
  {
    id: 16,
    category: "Bollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b4.b4098382.jpg",
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 17,
    category: "Technology",
    image: "https://vaibhav-blog-app.netlify.app/static/media/t3.9a874301.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 18,
    category: "Hollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/h2.acaae28d.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },

  {
    id: 19,
    category: "Fitness",
    image: "https://vaibhav-blog-app.netlify.app/static/media/fi2.afbe706d.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 20,
    category: "Food",
    image: "https://vaibhav-blog-app.netlify.app/static/media/f2.efe7db02.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 23 2021",
  },
  {
    id: 21,
    category: "Bollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b5.6c9a29b5.jpg",
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 22,
    category: "Technology",
    image: "https://vaibhav-blog-app.netlify.app/static/media/t4.816c9c37.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 23,
    category: "Hollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/h3.6ba99253.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },

  {
    id: 24,
    category: "Fitness",
    image: "https://vaibhav-blog-app.netlify.app/static/media/fi3.1af1f5bf.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 25,
    category: "Food",
    image: "https://vaibhav-blog-app.netlify.app/static/media/f3.d8e82390.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 24 2021",
  },
  {
    id: 26,
    category: "Bollywood",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/travelSub.4a18df0c.jpg",
    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 27,
    category: "Technology",
    image: "https://vaibhav-blog-app.netlify.app/static/media/t5.f164114d.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 28,
    category: "Hollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b4.b4098382.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },

  {
    id: 29,
    category: "Fitness",
    image: "https://vaibhav-blog-app.netlify.app/static/media/fi4.f2703334.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 30,
    category: "Food",
    image: "https://vaibhav-blog-app.netlify.app/static/media/f4.e5f22b6c.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 31,
    category: "Bollywood",
    image:
      "https://vaibhav-blog-app.netlify.app/static/media/travelMain.1bb97a60.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 32,
    category: "Technology",
    image: "https://vaibhav-blog-app.netlify.app/static/media/t6.0493867f.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 33,
    category: "Hollywood",
    image: "https://vaibhav-blog-app.netlify.app/static/media/b5.6c9a29b5.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },

  {
    id: 34,
    category: "Fitness",
    image: "https://vaibhav-blog-app.netlify.app/static/media/fi5.fb7cfff3.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
  {
    id: 35,
    category: "Food",
    image: "https://vaibhav-blog-app.netlify.app/static/media/f5.d1a875b9.jpg",

    travelHead: "Lorem ipsum dolor sit amet.",
    shortPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    travelDate: " / August 26 2021",
  },
];
router.get("/", (req, res) => {
  //   res.json("<h1>all blogs  </h1>");
  res.status(200);
  res.json({
    success: true,
    message: "sucessfully created!!! ",
    data: blogs,
  });
  // res.json(blogs);
  //   res.json(`${blogs}`);
  // res.end();
});
module.exports = router;
// image:
//   "https://vaibhav-blog-app.netlify.app/static/media/fitMain.35faee75.jpg",
// msg: "hello its blogs page ",
