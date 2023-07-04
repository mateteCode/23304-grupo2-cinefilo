import Home from "./pages/Home";
import Blocked from "./pages/Blocked";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import User from "./pages/User";
import Favorites from "./pages/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import CommentsPopup from "./components/CommentsPopup/CommentsPopup";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  getFavorites,
  getBlocked,
  getUserPhoto,
  getUserName,
  getCommentsByUser,
} from "./API/firebase";
import { RotateSpinner } from "react-spinners-kit";
import { useEffect } from "react";
import { useAppContext } from "./AppProvider";

import userPhotoDefault from "./assets/user_photo.png";

export default function App() {
  const [user, loading, error] = useAuthState(auth);
  const { showComments, dispatch } = useAppContext();

  useEffect(() => {
    if (user) {
      //getFavorites(user, setFavorites);
      //getBlocked(user, setBlocked);
      getUserPhoto(user?.uid).then((ph) => {
        dispatch({
          type: "UPDATE_USER_PHOTO",
          value: ph ? ph : userPhotoDefault,
        });
      });
      getUserName(user?.uid).then((us) =>
        dispatch({ type: "UPDATE_USER_NAME", value: us })
      );
      getBlocked(user?.uid).then((bl) => {
        dispatch({
          type: "UPDATE_BLOCKED",
          value: bl ? bl : [],
        });
      });
      getFavorites(user?.uid).then((fa) => {
        dispatch({
          type: "UPDATE_FAVORITES",
          value: fa ? fa : [],
        });
      });
    }
  }, [user]);

  return (
    <div className="App">
      {loading ? (
        <div className="spinner">
          <RotateSpinner size={30} color="#000" />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar isAuthenticated={user !== null} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home user={user} />}></Route>
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
                  element={<Favorites user={user} />}
                ></Route>
                <Route
                  path="/blocked"
                  element={<Blocked user={user} />}
                ></Route>
                <Route path="/user" element={<User user={user} />}></Route>
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
