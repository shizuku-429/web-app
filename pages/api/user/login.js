//pages/api/user/login.js

/* ユーザーログイン機能 */

import jwt from "jsonwebtoken"  //ログイン保持にトークンを使用
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

const secret_key = "ownwhereabout"  //トークン発行時のシークレットキー

const loginUser = async(req, res) => {
    try{
        await connectDB()
        const savedUserData = await UserModel.findOne({email: req.body.email})
        if(savedUserData){
            // ユーザーデータが存在する場合の処理
            if(req.body.password === savedUserData.password){
                // パスワードが正しい場合の処理

                const payload = {
                    email: req.body.email,
                }

                const token = jwt.sign(payload, secret_key, {expiresIn: "23h"})
                
                return res.status(201).json({message: "ログイン成功", token: token})
            }else{
                // パスワードが間違っている場合の処理
                return res.status(400).json({message: "ログイン失敗：パスワードが間違っています"}) 
            }
        }else{
            // ユーザーデータが存在しない場合の処理
            return res.status(400).json({message: "ログイン失敗：ユーザー登録をしてください"})
        }
    }catch(err){
        return res.status(400).json({message: "ログイン失敗1"}) 
    }
}

export default loginUser