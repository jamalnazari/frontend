import { Link } from "react-router-dom"
export const Nav=()=>{
    return(
                <nav className="nav">
          <Link to="/">خانه </Link>
          <Link to="/UsEf">  لیست یادداشت </Link>
          <Link to="/Api" >آب وهوا </Link>
          <Link to="profile/nazari/id">پروفایل</Link>
          
        </nav>
    )
}