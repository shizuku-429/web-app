/*  
    カスタムフック
    ログイン状態を調べて、表示ページの制限をかける
*/

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"

const secret_key = "ownwhereabout" 

const useAuth = () => {
    const [loginUser, setLoginUser] = useState("")

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        
        if(!token){
            //router.push("/user/login") 
        }
    
        try{
            const decoded = jwt.verify(token, secret_key)
            setLoginUser(decoded.email)
            //router.push("/app")
        }catch(error){
            console.log(error)
            router.push("/user/login") 
        }
    }, [router])

    return loginUser
}

export default useAuth