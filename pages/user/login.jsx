//pages/user/login.js

/* ログイン画面 */

import { useRouter } from "next/router"
import Head from "next/head"

import { useState } from "react"

const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();


    // ボタン押下でユーザー情報を送信
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
            await localStorage.setItem("token",jsonData.token)
            console.log(localStorage)
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
            <Head><title>ログイン</title></Head>
            <h1 className="page-title">ログイン</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">メールアドレス</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレスを入力" required/>
                <label htmlFor="password">パスワード</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder="パスワードを入力" required/>
                <button>ログイン</button>
            </form>
        </>
    )
}

export default Login