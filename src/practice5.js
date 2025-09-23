import { useParams } from "react-router-dom"
export const Profile=()=>{
    const {name , id}=useParams()
   return(
    <p>i am jamal{name} my age {id}</p>
   )
}
