import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import {config} from 'dotenv';
import connect from './Database/conn.js';
import cookieParser from 'cookie-parser';
import router from './router/route.js';
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 8080

app.use(cookieParser())
app.use(router);

app.get('/',(req,res)=>{
    try {
        res.json("get request")
    } catch (error) {
        res.json(error);
    }
})

connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`server stated at http://localhost:${port}/`);
        })
    } catch (error) {
        console.log(error)
    }
}).catch(error=>{
    console.log("Invalid database connection")
})



