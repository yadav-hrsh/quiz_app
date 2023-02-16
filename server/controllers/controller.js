import Question from '../models/questionSchema.js';
import Result from '../models/resultSchema.js';
import question,{answers} from '../Database/data.js';
export async function getQuestions(req,res){
try {
    const q = await Question.find();
    res.json(q);
} catch (error) {
    res.json({error})
}
}
export async function inserQuestion(req,res){
    try {
        Question.insertMany({ question:question,answers:answers }, 
            function(error,data){
            res.status(200).send({msg:"data saved successfully"})
            console.log(error);
            return;
        })
    } catch (error) {
        console.log(error)
        return;
    }
}

export async function dropQuestion(req,res){
    try {
        await Question.deleteMany();
        res.json({msg:"question databse deleted"})
    } catch (error) {
        console.log(error)
    }
}


export async function getResult(req,res){
    try {
        const q = await Result.find();
        res.json("getresult request "+q)
    } catch (error) {
        res.json({error})
    }
}

export async function storeResult(req,res){
    try {
        const {username, result,attempts,points,achived,createdat} = req.body;
        if(!username && !result) throw new Error('Data NOt Provided....!');

        Result.create({username, result,attempts,points,achived},function(error,data){
            res.json({msg:"data saved successfully"})
        })
    } catch (error) {
        console.log(error)
    }
}

export async function dropResult(req,res){
    try {
        await Result.deleteMany();
        res.json({msg:"question databse deleted"})
    } catch (error) {
        console.log(error)
    }
}
