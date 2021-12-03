const express=require("express");
const path=require('path');
const app=express();
// multer will be served as  a middleware
 
const multer=require('multer');
//where to store image
// name of file
// storage object is where the specification of our file is determined

const storage=multer.diskStorage({
    destination:(ereq,file,cb)=>{
        // error and image destination
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})
app.set("view engine","ejs");

app.get("/upload",(req,res)=>{
    res.render("upload");
});

app.post("/upload",upload.single('image'),(req,res)=>{
    res.send("Image Uploaded");
});

app.listen(3001);
console.log("3001 is the port");