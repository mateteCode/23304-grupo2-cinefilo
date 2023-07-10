import { FaSearch, FaHeart } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import {
  BsFillPersonPlusFill,
  BsFillPersonCheckFill,
  BsFillPersonXFill,
} from "react-icons/bs";
/*TODO: Cambiar icono de bloqueadas que sea el mismo que las cards */
export const MenuData = [
  {
    title: "Buscador",
    url: "/",
    cName: "nav-links",
    icon: <FaSearch />,
    always: true,
  },
  {
    title: "Favoritas",
    url: "/favorites",
    cName: "nav-links",
    icon: <FaHeart />,
    always: false,
    loggedIn: true,
  },
  {
    title: "Bloqueadas",
    url: "/blocked",
    cName: "nav-links",
    icon: <ImBlocked />,
    always: false,
    loggedIn: true,
  },
  {
    title: "Registrarse",
    url: "/register",
    cName: "nav-links",
    icon: <BsFillPersonPlusFill />,
    always: false,
    loggedIn: false,
  },
  {
    title: "Acceder",
    url: "/login",
    cName: "nav-links",
    icon: <BsFillPersonCheckFill />,
    always: false,
    loggedIn: false,
  },
  {
    title: "Perfil",
    url: "/user",
    cName: "nav-links",
    icon: <BsFillPersonXFill />,
    always: false,
    loggedIn: true,
  },
];
