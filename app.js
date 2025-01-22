const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.send("Hi , I am a man.");
});

const start = ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`${PORT} YEs i am connected`);
        });
    }catch(error){
        console.log(error); 

    }
}
start();