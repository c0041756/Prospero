

//Import express
const express = require("express");
//Import router from express
const router = express.Router();



//Define default behaviour for "/"
module.exports = () => {
    router.get("/", (req, res) => {
      res.render("index");
    });

  router.get("/footerLinks", (req, res) => {
    res.render("footerLinks");
  });


    return router;
};