// pages/register.jsx

/*　ユーザー登録画面 */

import { useState } from "react"
//import useForm from 'react-hook-form'
import { useRouter } from "next/router"

const Register = () =>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [department, setDepartment] = useState("")

    //const {register, formState: { errors } } = useForm();
    //const errors = useForm;
    const router = useRouter();
    
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
                    password:password,
                    department:department
                })
            })

            const jsonData = await response.json()
            router.push("./login")
            alert(jsonData.message)

        }catch(err){
            //console.log(err)
            alert("ユーザー登録失敗")
        }
    }

    return (
        <>
            <h1>ユーザー登録</h1>  
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


                <label htmlFor='department'>所属部署</label>
                    <select value={department} onChange={(e) => {setDepartment(e.target.value)}} name='department'>
                    <option value='' hidden>所属部署を選択</option>
                    <option value='dep1'>部署1</option>
                    <option value='dep2'>部署2</option>
                    <option value='dep3'>部署3</option>
                    </select>
                        
                <button>登録</button>    
            </form> 
        </>
    )
}

export default Register