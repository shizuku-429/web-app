//pages/whereabout/[id].jsx

import { useEffect } from "react"


/*　個人の所在表示用 */

const ReadSingleWhereAbout = (props) =>{
    console.log(props)

    return (
        <>
            <h1>自身の所在</h1>
            <h2>{props.singleWhereAbout.name}</h2>
            <h2>{props.singleWhereAbout.image}</h2>
            <h2>{props.singleWhereAbout.where}</h2>
        </>
        
    )
}

export default ReadSingleWhereAbout

export const getServerSideProps = async(context) =>{
    const response = await fetch(`http://localhost:3000/api/whereabouts/${context.query.id}`)
    const SingleWhereAbout = await response.json()

    return {
        props:SingleWhereAbout
    }
}