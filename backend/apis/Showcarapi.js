const connectDB = require('../db/dbConnect');


async function ShowcarApi(req,res){

    try{
        const db = await connectDB();
        const collection = db.collection('addcar');
        const car = await collection.find({}).toArray();

        if(car.length==0){
            return res.status(400).json({message:'car not found'});
                }
                else{
                    return res.status(200).json({message:'car found',carData:car});
                }

    }
    catch{
        console.log(err)
        return res.status(500).json({message:err.message});

    }
}
module.exports = {ShowcarApi}