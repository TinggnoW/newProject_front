import "../../../css/LoginPageCss.css"
import {Input, Button, Alert, Typography} from '@mui/material';
import Card from "@mui/material/Card";
import "../../../css/LoginPageCss.css"
import {ChangeEvent, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";
import NavbarAll from "../../component/NavbarAll.tsx";


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

    return (
        <body>
        <div className="LoginPageContainer">
            <div className="loginNavbar">
                <NavbarAll/>
            </div>

            <div className="loginPage"
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh'}}>
                <Card sx={{
                    borderRadius:'0.8px',
                    background: 'rgba(163,129,125,0.4)',
                    textAlign: 'center',
                    p: 3.85,
                    marginTop: '10vh',
                    boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.2)',
                    component: 'form',
                    width:'25vw',
                    height: '25vh',
                }}>
                    <h1>WELCOME BACK</h1>

                    {
                        isLoginFailed &&
                        <Alert severity="error">
                            Something wrong pls try again
                        </Alert>
                    }

                        <Input
                        placeholder="Email"
                        type="email"
                        fullWidth
                        sx={{
                            mb: 2,
                            mt: 2,
                            fontFamily: "'Forum', serif"
                        }}
                        onChange={handleEmailChange}
                    />
                        <Input
                            placeholder="Password"
                            type="password"
                            fullWidth
                            sx={{
                                mb: 0,
                                fontFamily: "'Forum', serif"
                            }}
                            onChange={handlePasswordChange}
                        />
                    <Typography
                        sx={{
                            fontFamily: "'Forum', serif",
                            fontSize:'0.7rem',
                            textAlign:'left',
                            marginBottom:'2vh',

                        }}>
                        <Button
                            sx={{
                                fontFamily: "'Forum', serif",
                                fontSize:'0.7rem',
                                color:'rgb(255,255,255)',
                               ' &:hover':{
                                   backgroundColor: 'rgba(172,169,169,0)',
                                   color: 'black',
                               }
                            }}>
                            Join now
                        </Button>
                       start a new journey

                    </Typography>


                    <Button variant="contained"  onClick={handleLogin} fullWidth
                            sx={{
                                    fontFamily: "'Forum', serif",
                                    borderRadius:'0.8px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#e2e1e1',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                                        color:'black'
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
