/* 個人ページの表示・ステータス変更ページ */

import { useState } from "react"


const UpdateWhereAbout = (props) => {

    console.log(props.singleWhereAbout._id)

    const [name, setName] = useState(props.singleWhereAbout.name)
    const [image, setImage] = useState(props.singleWhereAbout.image)
    const [where, setWhere] = useState(props.singleWhereAbout.where)


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
                    where: where
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("アイテム編集失敗a")
        }
    }

    //const loginUser = useAuth()

    //if(loginUser === props.singleItem.email){
        return (
            <div>
                
                <h1 className="page-title">個人ページ</h1>
                <form onSubmit={handleSubmit}>
                    <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="写真" required/>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="名前" required/>
                    <input value={where} onChange={(e) => setWhere(e.target.value)} type="text" name="where" placeholder="所在" required/>
                    <button>編集</button>
                </form>
            </div>
        ) 
   // }else{
    //    return <h1>権限がありません</h1>
    //}

}

export default UpdateWhereAbout



export const getServerSideProps = async(context) =>{
    const response = await fetch(`http://localhost:3000/api/whereabouts/${context.query.id}`)
    const SingleWhereAbout = await response.json()

    return {
        props:SingleWhereAbout
    }
}