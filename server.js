
const express = require("express");
const { errorhandler } = require("./middlerware/errorhandler");
const { ConnectDb } = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app= express()
const PORT = process.env.PORT || 5000   ;

ConnectDb();
app.use(express.json());
app.use("/api/contacts",require("./routes/contactroutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorhandler);

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})
