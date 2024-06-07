const connectDB = require('../db/dbConnect');


async function TripApi(req,res){
    try{
        const db = await connectDB();
        const collection = db.collection('trip');

        const {pickup , dropoff , pickdate , dropdate , picktime}  = req.body;

        const tripExist = await collection.findOne({picktime});
        
        if(tripExist){
            return res.status(400)
            .json({message:'car already rent a customer'});
        }
        await collection.insertOne({
            pickup,
            dropoff,
            pickdate,
            dropdate,
            picktime
        });
        return res.status(200).json({message:'trip added successfully'});
    }
    catch(err){
        return res.status(500).json({message:err.message});

    }

}
module.exports = {TripApi}