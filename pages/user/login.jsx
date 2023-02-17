//pages/user/login.js

/* ログイン画面 */

import { useRouter } from "next/router"

import { useState } from "react"

const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const handleSubmit = async(e) =>{

        e.preventDefault()
        

        try{
            
            const response = await fetch("http://localhost:3000/api/user/login",{
                method:"POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password: password
                })
            })

            const jsonData = await response.json()

            localStorage.setItem("token",jsonData.token)
            alert(jsonData.message)
            if(jsonData.token){
                router.push("/")
            }
        }catch(err){
            alert("ログイン失敗")
        }
    }

    return (
        <>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレス" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder="パスワード" required/>
                <button>ログイン</button>
            </form>
        </>
    )
}

export default Login