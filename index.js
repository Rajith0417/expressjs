const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors');

// Enable CORS for all routes or specify specific origins if needed
app.use(cors({ origin: 'http://localhost:4200' }));
// Make "public" Folder Publicly Available
app.use("routes/uploads", express.static("public"));

// app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("Hi");
  //res.send("test");
  //res.status(500);
  //res.json({message: "test"});
  res.render("index", {text: "bla bla"});
})

// app.listen(port, () => {
//   console.log('Example app listening on port ${port}')
// })

const userRouter = require("./routes/user")
app.use("/user", userRouter);

const fileUpload = require("./routes/fileUpload")
app.use("/upload", fileUpload);

app.listen(port, ()=>{
  console.log(`Sever is running on port ${port}`);
});

