
const mongoose = require('mongoose');
require("dotenv").config();

//const dbname = "tvshowsDB";
//const dburl = "mongodb://localhost:27017/"+dbname;
const dburl = process.env.PROTOCOL+"://"+process.env.HOST+":"+process.env.DBPORT+"/"+process.env.DBNAME;

require("./schema.js")

mongoose.connect(dburl);
mongoose.connection.on ("connected", ()=>{
    console.log("database connected");
});

mongoose.connection.on("disconnected",()=>{

        console.log("connection halted");
        
    }
  
)
mongoose.connection.on("error", ()=>{
    console.log("database connection happens");
})


process.on("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log("Mongodb terminated by application");
        process.exit(0);
    })

 process.on("SIGTERM",()=>{
     mongoose.connection.close(()=>{
         console.log("mongodb terminated by app");
         process.exit(0);
     })

 })

 process.once("SIGUSR2", ()=>{
    mongoose.connection.close(()=>{
        console.log("mongodb terminated by a user");
        process.kill(process.id,"SIGUSR2");
    })
 })
})