import connectDB from "../../../utils/database"
import { WhereAboutModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"

const getAllWhereAbouts = async(req, res) => {
    try{
        await connectDB()
        const allWhereAbouts = await WhereAboutModel.find()
        return res.status(200).json({message: "アイテム読み取り成功（オール）", allWhereAbouts: allWhereAbouts})
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗（オール）"})
    }
}

export default getAllWhereAbouts