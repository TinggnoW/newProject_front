import './css/HomePageCss.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./config/RouterConfig.tsx";

export default function App() {

  return (
      <RouterProvider router={router}/>
  )
}


