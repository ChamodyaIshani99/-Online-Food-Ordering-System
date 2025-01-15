import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Chamodya:Chamodya897@cluster0.gqv5t.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}