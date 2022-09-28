const { render } = require('ejs');
const { application } = require('express');
const express = require('express')
const router = express.Router();
const users = [{firstName: "name1"}, {firstName: "name2"}];


router.get("/", (req, res)=>{ 
    res.send("user route");
});

router.post("/",(req, res)=>{
    res.send(`===== ${req.body.firstName}`);
    users.push({firstName: req.body.firstName});
    console.log(users);
});

router.get("/new", (req, res)=>{
    console.log("------s");
    // res.send("user new form");
    res.render("users/new", {firstName: "test123"});
});

// router.get("/:userId", (req, res)=>{
//     res.send(`get user with Id ${req.params.userId}`);
// });

// router.post("/:userId", (req, res)=>{
//     res.send(`post user with Id ${req.params.userId}`);
// });

// router.put("/:userId", (req, res)=>{
//     res.send(`update user with Id ${req.params.userId}`);
// });

// router.delete("/:userId", (req, res)=>{
//     res.send(`delete user with Id ${req.params.userId}`);
// });

router.route("/:userId")
.get((req, res)=>{
    console.log(req.user);
    res.send(`get user with Id ${req.params.userId}`);
})
.post((req, res)=>{
    res.send(`post user with Id ${req.params.userId}`);
})
.put((req, res)=>{
    res.send(`update user with Id ${req.params.userId}`);
})
.delete((req, res)=>{
    res.send(`delete user with Id ${req.params.userId}`);
});

router.param("userId", (req, res, next, id)=>{
    req.user = users[id];
    next();//without this middleware will not work http://localhost:3000/user/2
})



module.exports = router;
