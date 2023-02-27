import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrdersProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </OrdersProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
