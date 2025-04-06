import { NavLink } from "react-router-dom";
import './index.css'
export default function MyNavLink(props) {
    return (
        <NavLink 
            {...props}
            style={{border:'1px solid red', padding: '10px'}}
        >
        </NavLink>
    )
}