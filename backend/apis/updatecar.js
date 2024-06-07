const connectDB = require('../db/dbConnect')
const {ObjectId} = require('mongodb');

async function UpdateApi(req,res){
    try{

        const db = await connectDB();
        const collection = db.collection('addcar');

        const{uId,car,company,millage,transmission,seats,luggage,fuel}= req.body;
        const carphoto = req.file;

        await collection.updateOne(
            {
                _id:ObjectId.createFormHexString(uId)
            },
            {
                $set:{
                    car:car,
                    company:company,
                    millage:millage,
                    transmission:transmission,
                    seats:seats,
                    luggage:luggage,
                    fuel:fuel,
                    carphoto:carphoto


                }
            }
        );
        return res.status(200).json({message:'car updated succesfully'});

    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err.message});
//ok done have joya kar
//Karto shu error ave che batay mane

//aa login krvi ne to admin panal km khuli jay che ?
//kham have

    }
}
module.exports= {UpdateApi}