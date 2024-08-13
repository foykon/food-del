import mongoose from "mongoose";

export const connectDB = async () => {
    // userName : foykon9
    // password : YNP1pstHb1lNDPTO
    await mongoose.connect('mongodb+srv://foykon9:YNP1pstHb1lNDPTO@cluster0.n6gui.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}