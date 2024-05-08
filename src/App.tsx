import {RouterProvider} from "react-router-dom";
import {router} from "./config/RouterConfig.tsx";
import {useEffect, useState} from "react";
import {UserData} from "./data/user/UserData.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts";
import {LoginUserContext} from "./context/LoginUserContext.ts";
import "./index.css"

export default function App() {
// undefined app 未知有沒人 login
  const [loginUser, setLoginUser] = useState<UserData|null|undefined>(undefined);

  useEffect(() => {

    FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
  }, []);

  return (
      <>
        <LoginUserContext.Provider value={loginUser}>
          <RouterProvider router={router}/>
        </LoginUserContext.Provider>

    </>
  )
}


