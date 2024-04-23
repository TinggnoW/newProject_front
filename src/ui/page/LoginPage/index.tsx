import "../../../css/LoginPageCss.css"
import {Input, Button} from '@mui/material';
import Card from "@mui/material/Card";
import "../../../css/LoginPageCss.css"
import Navbar from "../../component/Navbar.tsx";

export default function LoginPage()  {
    const handleLogin = () => {};

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
                    marginTop: '100px',
                    boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.2)'
                }}>
                    <h1>Login</h1>
                    <Input placeholder="User" fullWidth sx={{mb: 2}}/>
                    <Input placeholder="Password" type="password" fullWidth sx={{mb: 2}}/>
                    <Button variant="contained" onClick={handleLogin} fullWidth sx={{
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
