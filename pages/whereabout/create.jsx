//pages/user/whereabout/create.jsx

/* 表示データの追加 */

import { useState } from "react"
import Head from "next/head"
import useAuth from "../../utils/useAuth"
import ImgInput from "../../components/imginput"


const CreateWhereAbout = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [where, setWhere] = useState("home")
    const [email, setEmail] = useState("")
    const [department, setDep] = useState("")

    //　ボタン押下でDBにデータの追加
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:3000/api/whereabouts/create", {
                method: "POST",
                headers: { 
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    name: name,
                    image: image,
                    where: where,
                    email: email,
                    department : department
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("メンバー追加失敗")
        }
    }

    //ページ表示制限(ログインしている場合のみ)
    const loginUser = useAuth() 

    if(loginUser){
        return (
            <div>
                <Head><title>表示メンバー追加</title></Head>
                <h1 className="page-title">表示メンバー追加</h1>

                <ImgInput setImage = {setImage}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">氏名</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="氏名を入力" required/>
                    <label htmlFor="where">所在</label>
                    <select value={where} onChange={(e) => {setWhere(e.target.value)}} name='department' required>
                        <option value='' hidden>所属部署を選択</option>
                        <option value='home'>home</option>
                    </select>
                    <label htmlFor="email">メールアドレス</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="where" placeholder="メールアドレスを入力" required/>
                    <label htmlFor='department'>所属部署</label>
                    <select value={department} onChange={(e) => {setDep(e.target.value)}} name='department' required>
                        <option value='' hidden>所属部署を選択</option>
                        <option value='dep1'>部署1</option>
                        <option value='dep2'>部署2</option>
                        <option value='dep3'>部署3</option>
                    </select>
                    <button>作成</button>
                </form>
            </div>
        )
    }
}

export default CreateWhereAbout