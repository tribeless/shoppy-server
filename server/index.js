const express = require("express");
const cors = require("cors");
const sequelize = require("./config/dbconfig");

require("dotenv").config();
const {PORT} = process.env;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
const corsOption = {
    origin:"http://localhost:3000"
}
app.use(cors(corsOption));

//lets test connection to db
sequelize.authenticate()
.then(()=>console.log("Connected successfully to our datasource💥"))
.catch((e)=>console.log("Could not connect to our datasource at the moment!"));

//use in dev mode
sequelize.sync({ force: true }).then(()=>console.log("Successfully created models"));

app.get("/",(req,res)=>{
    res.send("Shoppy server ❤")
})

app.listen(PORT,()=>console.log(`🚀 App running at http://localhost:${PORT}`));