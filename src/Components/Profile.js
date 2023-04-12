import {useAuth} from "./utils/auth";
import {useNavigate} from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/')
  }
  return (
    <>
      <p>Welcome {auth.user}</p>
      <button className={'bg-pink-500 p-4 rounded text-white'} onClick={handleLogout}>LOGOUT</button>
    </>
  )
}

export default Profile