

const { dbGetBillById, dbInsertBillById, dbUpdateBill } = require("../services/bill.service");


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
    const payload = req.authUser;
    const inputData = req.body;
    console.log( inputData );

    inputData.userId = payload.id;

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


async function deleteBill(req, res) {
    const billId = req.params.id;

    const data = await dbDeleteBill(billId);

    res.json({
        ok: true,
        data,
        msg: 'elimina'
    })
}




async function updateBillPatch( req, res ){
    const billId= req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateBill( billId, inputData );

        res.status( 200 ).json({
            ok: true,
            data
        });
    }
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: "Error al actualizar la factura"
        })
    } 
}
 
module.exports = {
    getBillById,
    createBillId,
    updateBillPatch

}