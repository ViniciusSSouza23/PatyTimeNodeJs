const router = require("express").Router();



//services
const serviceRouter = require ("./service");


router.use("/",serviceRouter);



module.exports = router;