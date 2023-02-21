//components/imgInput.jsx

/* 画像アップロード用コンポーネント */

import { useState } from "react";

const ImgInput = (props) => {

    const [imgFile, setImgFile] = useState("")

    const handleClidk = async() => {
        try{
            const data = new FormData()
            data.append("file", imgFile)
            data.append("upload_preset", "i5qtwczp")
            data.append("cloud_name", "dkadfariy")
            const response = await fetch("https://api.cloudinary.com/v1_1/dkadfariy/image/upload", 
                {method: "POST",
                body: data})
            //XXX をcloudinary のupload preset nameに変更
            //data.append("upload_preset", "XXX")
            //YYYをcloudinary のcloud nameに変更
            //data.append("cloud_name", "YYY")
           /* const response = await fetch("https://api.cloudinary.com/v1_1/YYY/image/upload", 
                {method: "POST",
                body: data})*/

            const jsonData = await response.json()
            await props.setImage(jsonData.url)

            alert("画像アップロード成功")

        }
        catch(err){
            console.log(err)
            alert("画像アップロード失敗")
        }
    }

    return (
        <div className="img-input">
            <input type="file" onChange={(e) => setImgFile(e.target.files[0]) } accept="image/png, image/jpg"/>
            <button onClick={handleClidk} disabled = {!imgFile}>画像アップロード</button>
        </div>
    )
}

export default ImgInput
