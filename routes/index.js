var express = require("express");
var router = express.Router();
const userModel = require("./users");
const error = require("mongoose/lib/error");
/* GET home page. */
router.get("/", function (req, res) {
  // req.session.banned = true;
  // res.cookie("age", 28); //add data to cookie -------------------
  res.render("index");
});

// new mongodb setup------------------------------
router.get("/create", async function (req, res) {
  let userData = await userModel.create({
    username: "dingop8893",
    name: "Dingop",
    nickname: "Dude",
    description: "my name is dingop , and im donig nothing",
    age: 25,
    catagories: ["mobile-using", "some time cooking", "finding default"],
  });
  res.send(userData);
});

router.get("/find", async function (req, res) {
  // var regex = new RegExp("react", "i");
  var date1 = new Date("2024-08-22");
  var date2 = new Date("2024-08-23");
  let userData = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$name" }, 0] },
        { $lte: [{ $strLenCP: "$name" }, 30] },
      ],
    },
  });
  res.send(userData);
});

/*
// create  a data in flash message-----------
router.get("/failed", function (req, res) {
  req.flash("age", 12);
  req.flash("name", "sauarv");
  res.send("create a data");
});

// check data in different route -----------
router.get("/check", function (req, res) {
  console.log(req.flash("age"), req.flash("name"));
  res.send("check terminal");
});
*/

//part 1------------------------------
/*
// read the cookie-----------------
router.get("/read", function (req, res) {
  // req.session.banned = true;
  console.log(req.cookies.age);
  res.send("chek console");
});

router.get("/deletecookie", function (req, res) {
  // req.session.banned = true;
  res.clearCookie("age");
  res.send("clear the cookie");
});

// add the ban-----------------------------
router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("you are banned");
  } else {
    res.send("you are not banned");
  }
  // console.log(req.session);
});

// remove the ban------------------
router.get("/removeban", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw error;
    res.send("bannen removed");
  });
});

router.get("/create", async function (req, res) {
  let createuser = await userModel.create({
    username: "kittu",
    age: 28,
    name: "saurav",
  });
  res.send(createuser);
});

// router.get("/deleteuser", async function (req, res) {
//   const deleteuser = await userModel.findOneAndDelete({ username: "kittu" });

//   res.send(deleteuser);
// });

router.get("/alluser", async (req, res) => {
  // let alluser = await userModel.find();
  let alluser = await userModel.findOne({ username: "kittu" });
  console.log(alluser);
  res.send(alluser);

  // await user.save();
  // res.send("ok");
});

//   //   res.send(alluser);
// });

//   //   res.send(alluser);
// });
*/
module.exports = router;
