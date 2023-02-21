//pages/user/whereabout/update/[id].jsx

/* 個人ページの表示・ステータス変更ページ */

import { useState } from "react"
import { useEffect } from "react"
import useAuth from "../../../utils/useAuth"
import Head from "next/head"
import Image from "next/image"


const UpdateWhereAbout = (props) => {

    const [name, setName] = useState(props.singleWhereAbout.name)
    const [image, setImage] = useState(props.singleWhereAbout.image)
    const [where, setWhere] = useState(props.singleWhereAbout.where)
    const [email, setEmail] = useState(props.singleWhereAbout.email)

    // 編集ボタンで登録内容を変更
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:3000/api/whereabouts/update/${props.singleWhereAbout._id}`, {
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
                    email:email
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("編集失敗")
        }
    }

    //ページ表示制限 (ログインしている場合のみ)
    const loginUser =  useAuth()

    if(loginUser === props.singleWhereAbout.email){
        return (
            <div>
                <Head><title>個人ページ</title></Head>
                <h1 className="page-title">個人ページ</h1>
                <Image src={image} width={200} height={200} alt="icon-img"/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">氏名</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="名前" required/>
                    <label htmlFor="where">所在</label>
                    <select value={where} onChange={(e) => {setWhere(e.target.value)}} name='where' required>
                        <option value='home'>home</option>
                        <option value='space1'>space1</option>
                        <option value='space2'>space2</option>
                        <option value='space2'>remotework</option>
                    </select>
                    <button>更新</button>
                </form>
            </div>
        ) 
    }else{
        return <h1>権限がありません</h1>
    }

}

export default UpdateWhereAbout


//個人の表示内容を取得
export const getServerSideProps = async(context) =>{
    const response = await fetch(`http://localhost:3000/api/whereabouts/${context.query.id}`)
    const SingleWhereAbout = await response.json()

    return {
        props:SingleWhereAbout
    }
}