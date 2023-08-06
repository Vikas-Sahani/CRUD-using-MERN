const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

//saving the used data in db
router.post("/register", async (req, res) => {
  console.log("from reg: checking what is in body", req.body);
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    res.status(404).json("plz fill the data");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log("reg: ", preuser);

    if (preuser) {
      res.status(404).json("this is user is already present");
    } else {
      const adduser = new users({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log("reg: ", adduser);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

// get userdata
router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(200).json(userdata);
    console.log("getData: ", userdata);
  } catch (error) {
    res.status(404).json(error);
  }
});

// get individual user
router.get("/getuser/:id", async (req, res) => {
  try {
    console.log("getDataid: ", req.params);
    const { id } = req.params;

    const userindividual = await users.findById({ _id: id });
    console.log("getdataid: ", userindividual);
    res.status(200).json(userindividual);
  } catch (error) {
    res.status(404).json(error);
  }
});

// update user data
router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log("updateid: ", updateduser);
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(404).json(error);
  }
});

// delete user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await users.findByIdAndDelete({ _id: id });
    console.log("delid: ", deletuser);
    res.status(200).json(deletuser);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
