const { dbInsertCart } = require("../services/cart.service");

async function createCart(req,res) {
    const inputData = req.body;

    try {
        const data = await dbInsertCart(inputData);
        res.status(201).json({
            ok: true,
            data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear carrito'
        });
    }

    
}




module.exports = {
    createCart
}