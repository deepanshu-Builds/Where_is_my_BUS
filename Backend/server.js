require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database.js")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
app.get("/" , (req , res)=>{
    res.send("Route is working")
});
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log("Server is running ");
})