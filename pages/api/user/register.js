import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

const registerUser = async(req, res) => {
    try{
        await connectDB()
        console.log(req.body)
        await UserModel.create(req.body)
        return res.status(200).json({message: "ユーザー登録成功"})
    }catch(err){
        console.log(err)
        return res.status(400).json({message: "ユーザー登録失敗"})
    }
}

export default registerUser