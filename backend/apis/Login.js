const connectDB = require('../db/dbConnect');

async function LoginApi(req,res){
    try{
        const db=await connectDB();
        const collection = db.collection('carsign');

        const {email, password} = req.body;

        const user = await collection.findOne({email,password});

        if(!user){
            return res.status(400).json({message:"Invalid username and password"});
        }
        else{

                   req.session.user = {session:user,isAuth:true};
                   

                 const  userDatas = req.session.user;

                 res
                 .status(200)
                .json({userData:userDatas,success:true,message:"Login sucessfull"});
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json("login api error",{message:err.message});
    }
}
module.exports ={LoginApi};




