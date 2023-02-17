// utils/auth.js

/* ユーザーのログイン状態を判定するためのミドルウェア */

import jwt from "jsonwebtoken"

const secret_key = "ownwhereabout"  //トークン発行時のシークレットキー

const auth = (handler) => {

    return async(req, res) => {
        if(req.method === 'GET'){
            return handler(req, res)
        }
        await console.log(req.headers.authorization)
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWwxQGppemFpZS5jby5qcCIsImlhdCI6MTY3NjU5ODI3MSwiZXhwIjoxNjc2NjgxMDcxfQ.mMiwSOYqIqo0DFBN8DNWrP8JomVJ4rmLMp1PivgrL4U"
        const token = await req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(401).json({message: "トークンがありません"})
        }

        try{
            const decoded = jwt.verify(token, secret_key)
            //console.log(decoded)
            req.body.email = decoded.email

            return handler(req, res)
        }catch(err){
            return res.status(401).json({message: "トークンが正しくないので、ログインしてください"})
        }
    }

}

export default auth