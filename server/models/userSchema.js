import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});
//generating token
userSchema.methods.generateAuthToken = async function(){
    try {
        let tokenharsh = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:tokenharsh});
        await this.save();
        return tokenharsh;
    } catch (error) {
        console.log(error)
    }
}


const User = mongoose.model('USER',userSchema)

export default User;