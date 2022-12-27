const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

router.route("/services").post((req,res)=>{
    serviceController.create
})


module.exports= router;