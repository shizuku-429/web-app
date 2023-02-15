// utils/auth.js

/* ユーザーのログイン状態を判定するためのミドルウェア */

import jwt from "jsonwebtoken"

const secret_key = "ownwhereabout"  //トークン発行時のシークレットキー

const auth = (handler) => {

    return async(req, res) => {
        if(req.method === 'GET'){
            return handler(req, res)
        }
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGZAenhjdi5jb20iLCJpYXQiOjE2NzY0Mzc3ODEsImV4cCI6MTY3NjUyMDU4MX0.lDo6GmJRH4DqxEU99TA-mlXeum1_SASAiW2nFBrbI6A"
         //const token = await req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(401).json({message: "トークンがありません"})
        }

        try{
            const decoded = jwt.verify(token, secret_key)
            console.log(decoded)
            return handler(req, res)
        }catch(err){
            return res.status(401).json({message: "トークンが正しくないので、ログインしてください"})
        }
    }

}

export default auth