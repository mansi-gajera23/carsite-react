const connectDB =require('../db/dbConnect');

async function SignupApi(req,res){
    try{
        const db =await connectDB();
        const collection = db.collection('carsign');

        const{email,mobile,password}=req.body;

        const userExist = await collection.findOne({email});

        if(userExist){
            return res.status(400)
            .json("user exist error",{message:'User already exist'});
        }
        await collection.insertOne({
            // usr,
            email,
            mobile,
            password,
            
        });
        return res.status(200).json({message:'User created sucessfully'});
    }
    catch(err)
    {
        return res.status(500).json("signup api error",{message:err.message});
    }

}
module.exports = {SignupApi}