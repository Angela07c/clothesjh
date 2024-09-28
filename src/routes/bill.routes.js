const express = require( "express" );
const { getBillById, createBillId } = require("../controllers/deliver.controller");
const { authUser, greeting } = require("../middlewares/auth-user.middleware");
const router = express.Router(); 


router.post( "/", createBillId );
router.get( "/:id", getBillById);


module.exports = router;