const connectDB = require('../db/dbConnect');


async function ShowuserApi(req,res){
    try{
        const db =await connectDB();
        const collection = db.collection('carsign');
        const user = await collection.find({}).toArray();

        if(user.length==0){
            return res.status(400).json({message:'user not found'});
                }
                else{
                    return res.status(200).json({message:'user found',userData:user});
                }

    }
    catch{
        console.log(err);
        return res.status(500).json({message:err.message});

    }
}
module. exports = {ShowuserApi}