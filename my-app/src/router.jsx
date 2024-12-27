import React from "react"; 
import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage";
import Default from "./layout/Default";
import Auth from "./layout/Auth";
import WelcomeBack from "./welcomeBack";
import SignUppage from "./signUppage";
import ForgotP from "./forgotP";
import LoggedIn from "./layout/LoggedIn";
import PassReset from "./passReset";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Default/>,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <WelcomeBack />,
      },
      {
        path: "sign-up",
        element: <SignUppage />,
      },
      {
        path: "forgot-password",
        element: <ForgotP />,
      },
      {
        path: "password-reset",
        element: <PassReset />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <LoggedIn />,
    children: [],
  },
]);

export default router;
