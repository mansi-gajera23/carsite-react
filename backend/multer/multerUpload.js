const multer = require("multer");

const carphotoStorage = multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,"../fronted/adminsite/src/images/carphoto");
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const carphotoUpload = multer({storage:carphotoStorage});

module.exports ={carphotoUpload}