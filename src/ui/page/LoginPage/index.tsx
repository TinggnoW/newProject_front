import "../../../css/LoginPageCss/LoginPageCss.css";
import { Input, Button, Alert, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ChangeEvent, useState, useEffect } from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts";
import { useNavigate } from "react-router-dom";
import NavbarAll from "../../component/NavbarAll.tsx";
import Loading from "../../component/LoadingPage/Loading.tsx";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [animateText, setAnimateText] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading time to 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
    if (loginResult) {
      setAnimateText(true);
      setTimeout(() => {
        navigate(-1);
      }, 1500); // Delay navigation to allow the animation to complete
    } else {
      setIsLoginFailed(true);
      setShowAlert(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Alert will disappear after 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showAlert]);

  if (loading || isLoginFailed) {
    return <Loading/>;
  }

  return (
    <div className="LoginPageContainer">
      <div className="loginNavbar">
        <NavbarAll />
      </div>
      {showAlert && (
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(223,223,223,0)",
          }}
        >
          Something went wrong, please try again
        </Alert>
      )}

      <div
        className="loginPage"
        style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", paddingTop: "10vh" }}
      >
        <Card
          sx={{
            borderRadius: "2px",
            background: "rgba(163,129,125,0.4)",
            boxShadow: "8px 8px 8px 8px rgba(0, 0, 0, 0.2)",
            width: "370px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className={animateText ? "light-up" : ""}
            sx={{
              fontFamily: "'Forum', serif",
              fontWeight: "bold",
              fontSize: "2.5rem",
              letterSpacing: "0.2rem",
              textShadow: `1px 1px 1px rgba(255, 255, 255, 0.6),-1px -1px 1px rgba(111, 111, 111, 0.68)`,
              color: "rgba(159,126,122,1)",
              marginBottom: "1rem",
            }}
          >
            WELCOME BACK
          </Typography>

          <Input
            placeholder="Email"
            type="email"
            fullWidth
            sx={{
              fontFamily: "'Forum', serif",
              marginTop:"1rem",
              marginBottom: "1rem",
            }}
            onChange={handleEmailChange}
          />
          <Input
            placeholder="Password"
            type="password"
            fullWidth
            sx={{
              fontFamily: "'Forum', serif",
              marginBottom: "1.5rem",
            }}
            onChange={handlePasswordChange}
          />

          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{
              marginTop: "1rem",
              fontFamily: "'Forum', serif",
              borderRadius: "2px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
              color: "white",
              "&:hover": {
                backgroundColor: "#e2e1e1",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                color: "black",
              },
            }}
          >
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
}
