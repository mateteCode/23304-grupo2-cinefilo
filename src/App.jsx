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
import { useState } from "react";
import { useEffect } from "react";
import { getFavorites, getBlocked } from "./API/firebase";
import CommentsPopup from "./components/CommentsPopup/CommentsPopup";
import { useAppContext } from "./AppProvider";

export default function App() {
  const [user, loading, error] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);
  const [blocked, setBlocked] = useState([]);

  const { showComments } = useAppContext();

  useEffect(() => {
    if (user) {
      console.log("Usuario autentificado");
      getFavorites(user, setFavorites);
      getBlocked(user, setBlocked);
    } else {
      console.log("No esta logueado");
    }
  }, [user]);
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
              <Route
                path="/"
                element={
                  <Home
                    user={user}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    blocked={blocked}
                    setBlocked={setBlocked}
                  />
                }
              ></Route>
              <Route
                element={
                  <ProtectedRoute
                    isAllowed={user !== null}
                    redirectTo="/login"
                  />
                }
              >
                <Route
                  path="/favorites"
                  element={
                    <Favorites
                      favorites={favorites}
                      user={user}
                      setFavorites={setFavorites}
                      setBlocked={setBlocked}
                      blocked={blocked}
                    />
                  }
                ></Route>
                <Route
                  path="/blocked"
                  element={
                    <Blocked
                      favorites={favorites}
                      user={user}
                      setFavorites={setFavorites}
                      setBlocked={setBlocked}
                      blocked={blocked}
                    />
                  }
                ></Route>
                <Route path="/user" element={<User />}></Route>
              </Route>
              <Route element={<ProtectedRoute isAllowed={user === null} />}>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/reset" element={<Reset />}></Route>
              </Route>
            </Routes>
          </div>
          {showComments && <CommentsPopup user={user} />}
        </BrowserRouter>
      )}
    </div>
  );
}
