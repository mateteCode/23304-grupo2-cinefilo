import Home from "./pages/Home";
import Blocked from "./pages/Blocked";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import User from "./pages/User";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./API/firebase";
import { RotateSpinner } from "react-spinners-kit";
import "./index.css";

export default function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">
      {loading ? (
        <div className="spinner">
          <RotateSpinner size={30} color="#000" loading={loading} />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar isAuthenticated={user !== null} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                element={
                  <ProtectedRoute
                    isAllowed={user !== null}
                    redirectTo="/login"
                  />
                }
              >
                <Route path="/favorites" element={<Favorites />}></Route>
                <Route path="/blocked" element={<Blocked />}></Route>
                <Route path="/user" element={<User />}></Route>
              </Route>
              <Route element={<ProtectedRoute isAllowed={user === null} />}>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/reset" element={<Reset />}></Route>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}
