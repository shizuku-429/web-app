// pages/index.js


import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { useEffect } from "react"
import Head from "next/head"
import jwt from "jsonwebtoken"

import Button from "components/Button"

const secret_key = "ownwhereabout"  //トークン発行時のシークレットキー

const ReadAllWhereAbouts = (props) => {

  const [loginUser, setLoginUser] = useState("")
  const [url, setUrl] = useState("/user/login")
  const [sort, setSort] = useState({})
  
  //　ログインユーザーの取得
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)

    if(token){
      try{
        const decoded = jwt.verify(token, secret_key)
        setLoginUser(decoded.email)
      }catch(error){
        console.log(error)
      }
    }

    const max = props.allWhereAbouts.length
    var i =0
    for(i = 0;i<max; i = i+1){
      if(props.allWhereAbouts[i].email === loginUser){
        setUrl(`/whereabout/update/${props.allWhereAbouts[i]._id}`)
      } 
    }
  })
  
  //所属・所在でソート
  const handleSort = (key) => {
    //console.log(key)
    setSort(key)
    console.log(sort)
  }

  let sorted = useMemo(() => {
    let _sorted = props.allWhereAbouts;
    console.log(sort)
    if(sort.key){
      _sorted = sort.sort((a,b) => {
        a = a[sort]
        b = b[sort]

        if(a === b){
          return 0;
        }else if(a >b){
          return 1;
        }else{
          return 0;
        }
      })
    }
    console.log(_sorted)
    return _sorted
  }, [sort, props.allWhereAbouts])

  console.log(sort)
  console.log(sorted)


  
  return (
    <div>
      <div className="mainButton">
        <ul> 
          <li><Link href={url}>個人ページ</Link></li>
          <li><Link href="/whereabout/create">表示追加</Link></li>
        </ul>

    <br/>
    </div>
     
      <Head><title>所在一覧</title></Head>
      <h1 className="page-title">所在一覧</h1>
      <Button handleSort={handleSort}/>
        <ul className="card">
          {sorted.map(whereabout => (
            <li key={whereabout._id}>
              <Image className="icon" src={whereabout.image} width={50} height={50} alt="icon-img"/>
              <p>{whereabout.name}<span>部署</span>{whereabout.department}</p>
              <p className="where"><span>所在</span>{whereabout.where}</p>  
            </li>))}
        </ul>
    </div>
  )
}
  
export default ReadAllWhereAbouts
  

//全ての所在データをapiから取得
export const getServerSideProps = async(context) =>{
  
    const resReadAll = await fetch("http://localhost:3000/api/whereabouts/readall")
  
    const allWhereAbouts = await resReadAll.json()
  
    return {
      props:(
        allWhereAbouts
      )
    }
  }

