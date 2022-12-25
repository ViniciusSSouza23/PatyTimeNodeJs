const router = require("express").Router();



//services

const serviceRouter = ("./service");


router.use("/",serviceRouter);



module.exports = router;