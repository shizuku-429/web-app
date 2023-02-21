//pages/api/whereabouts/update/[id].js]

/* 表示データ変更機能 */


import connectDB from "../../../../utils/database" 
import { WhereAboutModel } from "../../../../utils/schemaModels"
import auth from "../../../../utils/auth"

const updateWhereAbout = async(req, res) => {
    
    try{
        await connectDB()
        const singleWhereAbout = await WhereAboutModel.findById(req.query.id)

        //表示ユーザーデータとログインユーザーが一致している場合
        if(singleWhereAbout.email === req.body.email){
            await WhereAboutModel.updateOne({_id: req.query.id}, req.body)
            return res.status(200).json({message: "アイテム編集成功"})
        }else{
            throw new Error()
        }
        
    }catch(err){
        //console.log(err)
        return res.status(400).json({message: "アイテム編集失敗"})
    }
}

export default auth(updateWhereAbout)