const express = require('express')
const app = express();
const port = 3000

// app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("Hi");
  //res.send("test");
  //res.status(500);
  //res.json({message: "test"});
  res.render("index", {text: "blabla bla"});
})

// app.listen(port, () => {
//   console.log('Example app listening on port ${port}')
// })

const userRouter = require("./routes/user")
app.use("/user", userRouter);

app.listen(port);

