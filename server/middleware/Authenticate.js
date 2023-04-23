import { verify } from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/userSchema.js';

const Authenticate =async (req,res,next)=>{
    try {
        console.log("comed")
        console.log("the cookie is",req.cookies)
        const token = req.cookies.jwtToken;



        const verifyToken = verify(token,process.env.SECRET_KEY);

        const rootuser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        
        if(!rootuser){
            throw new Error("user not found")
        }

        req.token = token;
        req.rootuser = rootuser;
        req.userID = rootuser._id;
        next();
        
    } catch (error) {
        res.status(401).send("unauthorized: NO token provied")
        // console.log(req)
    }
}

export default Authenticate;