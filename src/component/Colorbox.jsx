import React from "react";
import { useState } from "react";
const Colorbox=()=>{
const colors=[color,setcolor]= usestate(defaultcolor);

const boxstyle={
    height:"100px",
    width:"100px",
    backgroundColor:colors,
}


return(
    <>
    <div>
    <h2> color</h2>
    <button onClick={(e)=>setcolor(e.target.value)}>click to change color</button>
    <input type="color" value={colors} onChange={(e)=>setcolor(e.target.value)}/>
    </div>
        </>
)
}
export default Colorbox;