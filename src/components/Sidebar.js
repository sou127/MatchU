import { NavLink } from "react-router-dom"

import Avatar from './Avatar'
import { useAuthContext } from "../hooks/useAuthContext"

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import UsersIcon from '../assets/users.svg'
import { Link } from "react-router-dom"
import CalendarIcon from '../assets/calendar.svg'

export default function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
            <Avatar src={user.photoURL}></Avatar>
            <p>Hey, {user.displayName}!</p> 
          <Link to={`/profile/${user.uid}`}>
            <span>View Profile</span>
          </Link>
        </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Group</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule">
                <img src={CalendarIcon} width="25px" alt="add project icon" />
                <span>Schedule</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">
                <img className="toinv" width="25px" src={UsersIcon} alt="users icon" />
                <span>Study Partner</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}