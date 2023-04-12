import {NavLink} from "react-router-dom";
import {useAuth} from "./utils/auth";


const Navbar = () => {

  const auth = useAuth();

  const navLinkStyle =({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none'
    }
  }
  return (
    <nav className={'p-4 bg-red-500 text-white'}>
      <NavLink to={'/'} className={'mr-5 hover:scale-105'} style={navLinkStyle}>Home</NavLink>
      <NavLink to={'/about'}  className={'mr-5 hover:bg-black'} style={navLinkStyle}>About</NavLink>
      <NavLink to={'/products'}  className={'mr-5 hover:bg-black'} style={navLinkStyle}>Products</NavLink>
      <NavLink to={'/users'}  className={'mr-5 hover:bg-black'} style={navLinkStyle}>Users</NavLink>
      <NavLink to={'/profile'}  className={'mr-5 hover:bg-black'} style={navLinkStyle}>Profile</NavLink>
      {
        !auth.user && <NavLink to={'/login'}  className={'mr-5 hover:bg-black'} style={navLinkStyle}>Login</NavLink>

      }
    </nav>
  )
}

export default Navbar