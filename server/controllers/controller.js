import Question from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import User from '../models/userSchema.js';
import question, { answers, subject} from "../Database/data.js";
import bcrypt from 'bcrypt';

export async function getQuestions(req, res) {
  try {
    console.log(req,"this is of questions")
    const val = req.params.subject
    console.log("the val is",val)
    let value = val.substring(1);
    console.log(typeof(value));
    const q = await Question.find({subject:value});
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function inserQuestion(req, res) {
  try {
    console.log(req);
    Question.insertMany(
      {subject: subject, question: question, answers: answers },
      function (error, data) {
        res.status(200).send({ msg: "data saved successfully" });
        console.log(error);
        return;
      }
    );
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function dropQuestion(req, res) {
  try {
    await Question.deleteMany();
    res.json({ msg: "question databse deleted" });
  } catch (error) {
    console.log(error);
  }
}

export async function getResult(req, res) {
  console.log(req.params);
  const email = req.params.email;
  try {
    const q = await Result.find({username:email});
    return res.status(201).json({q});
  } catch (error) {
    return res.status(422).json({ error });
  }
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data NOt Provided....!");

    Result.create(
      { username, result, attempts, points, achived },
      function (error, data) {
        res.json({ msg: "data saved successfully" });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "question databse deleted" });
  } catch (error) {
    console.log(error);
  }
}

export async function Regsiter(req,res){
  console.log(req.body);
  const {  email,password } = req.body;
  if (
    !email ||
    !password
  ) {
    return res.status(422).json({ error: "invalid data" });
  }

  try {
    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(422).json({ error: "already registered user" });
    }
    const getpassword = await bcrypt.hash(password, 10);

    const data = new User({
      email: email,
      password: getpassword,
    });
    const savedata = await data.save();
    console.log(savedata);
    if (savedata) {
      res.status(201).json({ message: "successfully registered User" });
    } else {
      res.status(500).json({ error: "registration failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

export async function login(req, res){
  console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(522).json({ error: "invalid data" });
  }
  try {
    const data = await User.findOne({ email: email });
    if (data != null) {
      const hashcompare = await bcrypt.compare(password, data.password);

      const token = await data.generateAuthToken(); //calling userschema function called generateAuthToken
      res.cookie("jwtToken", token, {
        maxAge: new Date(Date.now() + 259800000),
        httpOnly: true,
      });

      if (hashcompare) {
        console.log("looged in")
        return res.status(201).json({ message: "user logged in" });
      } else {
        return res.status(422).json({ error: "invalid data" });
      }
    } else {
      return res.status(422).json({ error: "plz complete data" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function userdata(req,res){
  res.send(req.rootuser);
}