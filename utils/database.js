//unils/database.js

import mongoose from "mongoose"

/*
    所在情報を格納しているDBへ接続

    DB:MongoDB Atlas 
*/

const connectDB = async() =>{

    try {
        await mongoose.connect("mongodb+srv://shizuku:G4Jl0ZJYJbL4W3We@cluster0.cl50aga.mongodb.net/appDataBase?retryWrites=true&w=majority")
        //MongoDB Atlas のコネクションアドレスを取得・記入
        //await mongoose.connect("mongodb+srv://<ユーザー名>:<パスワード>@cluster0.cl50aga.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success:Conected to mongoDB")
    }catch(err){
        console.log("Failure:Unconnected to MongoDB")
        throw new Error()
    }

}

export default connectDB