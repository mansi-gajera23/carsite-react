const {MongoClient} = require("mongodb");
const url = "mongodb+srv://gajeramansi68:Mansi1234@mansicluster.abmeh.mongodb.net";
const client = new MongoClient(url);

async function connectToMongodb(){
    try{
        await client.connect()
        console.log("Connected To Mongodb");
        const database = client.db("carsite");
        return database;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectToMongodb;