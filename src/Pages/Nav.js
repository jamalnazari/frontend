import { Link } from "react-router-dom"
export const Nav=()=>{
    return(
                <nav>
          <Link to="/">Home</Link>
          <Link to="/UsEf">TodoList</Link>
          <Link to="/About">About</Link>
          
        </nav>
    )
}