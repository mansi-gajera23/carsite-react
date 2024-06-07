const { json } = require('express');
const connectDB = require('../db/dbConnect');


async function AddcarApi(req,res){
    try{

        const db= await connectDB();
        const collection = db.collection('addcar');

        const{car,company,millage,transmission,seats,luggage,fuel}= req.body;
        const carphoto = req.file;

        const carExist = await collection.findOne({car});
        
        if(carExist){
            return res.status(400)
            .json({message:'car already exist'});
        }
        await collection.insertOne({
            car,
            company,
            millage,
            transmission,
            seats,
            luggage,
            fuel,
            carphoto
        });
        return res.status(200).json({message:"car added successfully"});

    }
    catch(err){
        return res.status(500).json({message:err.message});

    }
}
module.exports = {AddcarApi}