async function Logout(req,res){
    const session = req.session.user;
    

    if(!session){
        return res.status(401).json({message:"no session created"});
    }
    else{
        req.session.destroy();
        return res.status(200).json({message:"logout sucessfully"});
    }
}
module.exports = {Logout}