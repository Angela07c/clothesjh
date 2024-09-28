// const { dbGetBillProduct } = require ("../services/deliver.service");

const { dbGetBillById, dbInsertBillById } = require("../services/bill.service");

async function getBillById( req, res ) {

    const billId = req.params.id;

    try {
        const data = await dbGetBillById( billId );

        res.status( 200 ).json({
            ok: true,
            data
        });
    }
    catch (error) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: "Error al obtener la factura"
        });
    }
}

async function createBillId( req, res ) {
    const inputData = req.body;
    console.log( inputData );

    try {
        const data = await dbInsertBillById( inputData );
        console.log( data );

        res.status( 201 ).json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: "Error al crear Id"
        })
        
    }
}
 
module.exports = {
    getBillById,
    createBillId
}