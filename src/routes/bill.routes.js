const express = require( "express" );
// const { authUser, greeting } = require("../middlewares/auth-user.middleware");
<<<<<<< HEAD
const { createBillId, getBillById, deleteBill } = require("../controllers/bill.controller");
=======
const { createBillId, getBillById, updateBillPatch } = require("../controllers/bill.controller");
>>>>>>> 11ffa92058e5885e96fc2679e01d686cc329e9b6
const { authUser } = require("../middlewares/auth-user.middleware");
const { dbUpdateBill } = require("../services/bill.service");
const router = express.Router(); 


router.post( "/", authUser, createBillId );
router.get( "/:id",authUser, getBillById);
<<<<<<< HEAD
router.delete("/:id",authUser,deleteBill);
=======
router.patch( "/:id", updateBillPatch );

>>>>>>> 11ffa92058e5885e96fc2679e01d686cc329e9b6

module.exports = router;