const express = require( "express" );
// const { authUser, greeting } = require("../middlewares/auth-user.middleware");
const { createBillId, getBillById, deleteBill } = require("../controllers/bill.controller");
const { authUser } = require("../middlewares/auth-user.middleware");
const router = express.Router(); 


router.post( "/", authUser, createBillId );
router.get( "/:id",authUser, getBillById);
router.delete("/:id",authUser,deleteBill);

module.exports = router;