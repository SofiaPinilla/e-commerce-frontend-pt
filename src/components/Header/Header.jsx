import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import {notification } from 'antd';

const Header = () => {
  const { token,logout } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div>
      <span>Header</span>
      <div className="nav">
        <Link to="/">Home</Link>
        {token ? (
            <>
          <Link to="/profile">Profile</Link>
          <button onClick={()=>{
            logout()
            navigate("/login")
            notification.success({
                message: 'Desconectado con éxito'
              });
          }}>Logout</button>
            </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
