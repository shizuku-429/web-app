//pages/api/user/login.js

/* ユーザーのログイン機能 */

import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

const loginUser = async(req, res) => {

    try{
        await connectDB //DB接続
        const savedUserData = await UserModel.findOne({email:req.body.email})   //入力emailからDBを検索

        if(savedUserData){

            if(savedUserData.password == req.body.password){
                return res.status(200).json({message: "ログイン成功"})
            }else{
                return res.status(400).json({message: "ログイン失敗：パスワードが間違っています"})
            }
        }else{
            return res.status(400).json({message: "ログイン失敗：ユーザーを登録してください"})
        }
        
    }catch(err){
        //console.log(err)
        return res.status(400).json({message: "ログイン失敗"})

    }

}

export default loginUser