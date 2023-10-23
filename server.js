import express from "express"
import morgan from "morgan";
//import connectDB from "./config/db.js";

import cors from 'cors';
import apiRoute from "./routes/apiRoute.js"




//database config
//connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
//routes
app.use('/api/v1/route', apiRoute)

//rest api
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to app"
    })
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white)
})