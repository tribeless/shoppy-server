const express = require("express");
const cors = require("cors");

require("dotenv").config();
const {PORT} = process.env;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
const corsOption = {
    origin:"http://localhost:3000"
}
app.use(cors(corsOption));

app.get("/",(req,res)=>{
    res.send("Shoppy server ❤")
})

app.listen(PORT,()=>console.log(`🚀 App running at http://localhost:${PORT}`));