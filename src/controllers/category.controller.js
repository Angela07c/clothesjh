const { dbInsertCategory, dbGetCategories } = require("../services/category.service");

async function createCategory (req,res){
    const inputData = req.body;


    try {
        const data = await dbInsertCategory (inputData);
        console.log (data);

        res.status (201).json ({
            ok: true,
            data
        });

        
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false, 
            msg: 'Error al crear una categoria'
        })
        
    }
}

async function getCategories (req,res) {
    try {
        const data = await dbGetCategories ();

        res.status (200). json ({
            ok:true,
            data
        })
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false,
            msg: 'Error al obtener las categorias'
        })
        
    }

}

module.exports = {
    createCategory,
    getCategories
}