
import React from "react"
import { useNavigate } from "react-router-dom"

export const About=()=>{
    let navigate=useNavigate()
    return(
       <React.Fragment>
        <p>this is About page</p>
        <button onClick={()=>{navigate("/")}}>go to Home page</button>
       </React.Fragment>  )
}
