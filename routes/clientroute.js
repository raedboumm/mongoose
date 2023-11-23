const express = require("express");
const route = express.Router();
const client = require("../model/clientShema");

route.get("/", async (req, res) => {
  try {
    const clientlist = await client.find();
    res.status(200).json({ msg: "success", clientlist: clientlist });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
route.post("/post", async(req, res) => {
  try {
   const clientlsit= await client.create(req.body)
    res.status(201).json({ msg: "new contact ", newcontact: clientlsit });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
route.delete("/delete/:id", async(req, res) => {
  try {
   const del= await client.findByIdAndDelete({_id:req.params.id})
    res.status(201).json({ msg: "deleted "});
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
route.put("/put/:id", async(req, res) => {
  try {
   const del= await client.findByIdAndUpdate({_id:req.params.id},{...req.body})
    res.status(201).json({ msg: "updated successfully "});
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});


module.exports = route;
