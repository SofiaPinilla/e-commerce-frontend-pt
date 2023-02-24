import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
