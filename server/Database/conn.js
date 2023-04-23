import mongoose from "mongoose";

const db = process.env.MONGODB;

export default async function connect() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb+srv://princeyadav19:Princeyadav19@datagetter.thuoiio.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("database connected");
}
