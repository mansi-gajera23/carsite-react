const connectDB = require('../db/dbConnect');
const {ObjectId} = require('mongodb');

async function DeletecarApi(req,res){
    try{
        const db= await connectDB();
        const collection = db.collection('addcar');

        const {uId} = req.body;

        const result = await collection.deleteOne({_id:ObjectId.createFromHexString(uId)});

        if(result.deletedCount===0){
            return res.status(400).json({message:"Car not found"});
                }
                else{
                    return res.status(200).json({message:"car deleted sucessfully"});
                }

            }
    catch(err){
        console.log(err);
    }
}
module.exports = {DeletecarApi}
