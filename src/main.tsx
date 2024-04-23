import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts";

//protect whole website as setting before the root

FirebaseAuthService.serviceInit();

ReactDOM.createRoot(document.getElementById('root')!).render(

    <App />

)
