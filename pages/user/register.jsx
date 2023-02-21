// pages/register.jsx

/*　ユーザー登録画面 */

import { useState } from "react"
import { useRouter } from "next/router"
import  Head  from "next/head"

const Register = () =>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();
    
    //ボタン押下でユーザー情報を送信
    const handleSubmit = async(e) =>{

        e.preventDefault()
        try{
            const response = await fetch("http://localhost:3000/api/user/register",{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            })

            const jsonData = await response.json()
            router.push("./login")
            alert(jsonData.message)

        }catch(err){
            alert("ユーザー登録失敗")
        }
    }

    return (
        <>
            <Head><title>ユーザー登録</title></Head>
            <h1 h1 className="page-title">ユーザー登録</h1>  
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">氏名</label>
                    <input value={name} onChange={ (e)=>{setName(e.target.value) }} 
                        type="text" name="name" placeholder="氏名を入力" required/>
                <label htmlFor="email">メールアドレス</label>    
                    <input value={email} onChange={ (e)=>{setEmail(e.target.value) }}
                        type="text" name="email" placeholder="@jizaie.co.jpを入力" pattern="^.*@jizaie.co.jp$" required/>
                <label htmlFor="password">パスワード</label>  
                    <input value={password} onChange={ (e)=>{setPassword(e.target.value) }}
                        type="text" name="password" placeholder="パスワードを入力" required/>
                        
                <button>登録</button>    
            </form> 
        </>
    )
}

export default Register