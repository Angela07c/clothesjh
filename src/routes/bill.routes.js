const express = require( "express" );
// const { authUser, greeting } = require("../middlewares/auth-user.middleware");
const { createBillId, getBillById, updateBillPatch } = require("../controllers/bill.controller");
const { authUser } = require("../middlewares/auth-user.middleware");
const { dbUpdateBill } = require("../services/bill.service");
const router = express.Router(); 


router.post( "/", authUser, createBillId );
router.get( "/:id",authUser, getBillById);
router.patch( "/:id", updateBillPatch );


module.exports = router;