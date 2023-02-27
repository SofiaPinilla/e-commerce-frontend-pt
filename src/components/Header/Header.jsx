import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Badge, notification } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Header.scss"
const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { clearCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const navigate = useNavigate();
  return (
    <div className="container">
      <span>Header</span>
      <div className="nav">
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/cart">
              <Badge count={cart.length}size="small">
                <ShoppingCartOutlined  style={{ fontSize: '20px', color: '#09c' }} />
              </Badge>
            </Link>
            <button
              onClick={() => {
                logout();
                navigate("/login");
                notification.success({
                  message: "Desconectado con éxito",
                });
                clearCart();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
