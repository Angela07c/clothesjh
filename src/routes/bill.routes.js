const express = require( "express" );
// const { authUser, greeting } = require("../middlewares/auth-user.middleware");
const { createBillId, getBillById } = require("../controllers/bill.controller");
const { authUser } = require("../middlewares/auth-user.middleware");
const router = express.Router(); 


router.post( "/", authUser, createBillId );
router.get( "/:id", getBillById);


module.exports = router;