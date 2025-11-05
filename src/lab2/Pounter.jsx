import React from "react"
import "./pounter.css";
const Pounter=()=>{
  const [count, setCount] =React.useState(0)
 return(
    <>
    <h2> Counter:{count} </h2>
    <button onClick={()=>setCount(count+1)}> increment </button>
    <button onClick={()=>setCount(count-1)}> decrement </button>
    </>
)
}
export default Pounter