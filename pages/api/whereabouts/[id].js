//

/* 1つの情報のみ取得 */

import connectDB from "../../../utils/database"  
import { WhereAboutModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"

const getSingleWhereAbout = async(req, res) => {  
    try{
        await connectDB()
        const singleWhereAbout = await WhereAboutModel.findById(req.query.id) 
        return res.status(200).json({message: "アイテム読み取り成功（シングル）", singleItem: singleWhereAbout})
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗（シングル）"})
    }
}

export default auth(getSingleWhereAbout)