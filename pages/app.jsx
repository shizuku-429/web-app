
/*import ReadSingleWhereAbout from "./component/whereabout/[id]"
import useAuth from "utils/useAuth"

const ReadAllWhereAbouts = (props) => {
    //console.log(props.allWhereAbouts[0])
    useAuth

    return (
      <div>
        <h1 className="h1-style">こんにちは</h1>
        
        {props.allWhereAbouts.map(whereabout => (console.log(whereabout),
          <div key={whereabout._id}>
            <h2>{whereabout.name}</h2>
            <h2>{whereabout.image}</h2>
            <h2>{whereabout.where}</h2>
            
          </div>))}
          <ReadSingleWhereAbout id={props.allWhereAbouts[0]._id} name={props.allWhereAbouts[0].name} image={props.allWhereAbouts[0].image} where={props.allWhereAbouts[0].where} />
        
      </div>
    )
  }//
  
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
  }*/

 