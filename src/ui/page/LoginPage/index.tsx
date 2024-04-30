import "../../../css/LoginPageCss.css"
import {Input, Button, Alert} from '@mui/material';
import Card from "@mui/material/Card";
import "../../../css/LoginPageCss.css"
import Navbar from "../../component/Navbar.tsx";
import {ChangeEvent, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";
// import {UserData} from "../../../data/user/UserData.ts";
// import {LoginUserContext} from "../../../context/LoginUserContext.ts";

export default function LoginPage()  {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);

    const navigate:NavigateFunction = useNavigate();
    // const loginUser=useContext<UserData|null|undefined>(LoginUserContext);

    const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const loginResult:boolean = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
        if (loginResult) {
            navigate(-1);
        }else{
            setIsLoginFailed(true);
        }
    };

    // useEffect(() => {
    //     if (loginUser){
    //         navigate("/");
    //     }
    // }, [loginUser]);

    return (
        <body>
        <div className="LoginPageContainer">
            <div className="loginNavbar">
                <Navbar/>
            </div>

            <div className="loginPage"
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh'}}>
                <Card sx={{
                    background: 'rgba(163,129,125,0.3)',
                    textAlign: 'center',
                    p: 3.89,
                    marginTop: '80px',
                    boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.2)',
                    component: 'form'
                }}>
                    <h1>Login</h1>

                    {
                        isLoginFailed &&
                        <Alert severity="error">
                            Something wrong pls try again
                        </Alert>
                    }

                        <Input
                        placeholder="Email"
                        type="email"
                        fullWidth sx={{mb: 2, mt:2}}
                        onChange={handleEmailChange}
                    />
                        <Input
                            placeholder="Password"
                            type="password"
                            fullWidth sx={{mb: 4}}
                            onChange={handlePasswordChange}
                        />

                    <Button variant="contained"  onClick={handleLogin} fullWidth sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 111, 0 .08)',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
                        },
                    }}>
                        Login
                    </Button>
                </Card>
            </div>
        </div>
        </body>
    );

}
