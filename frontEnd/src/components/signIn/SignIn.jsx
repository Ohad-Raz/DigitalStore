import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkMUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./SignIn.module.css"
import { APIBaseUrl } from "../../config";

const defaultTheme = createTheme();

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Your existing sign-in logic
      const response = await fetch(
        `${APIBaseUrl}/users/SignIn`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        const { token, user } = data;
        localStorage.setItem("token", token);
        setUser(user);
        console.log(data);
        console.log(token);
        console.log(user);
      } else {
        throw new Error(data.error);
      }
      // End of your existing sign-in logic

      // If using Firebase, you would have something like this:
      // await signInWithEmailAndPassword(auth, email, password);
      // Redirect or handle successful sign-in
    } catch (error) {
      console.error("Sign-in error:", error.message);
      setError("Failed to sign in. Check your email and password.");
    }
  };

  return (
    <div>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
            {/* <Grid item>
          <Typography variant="body2">
            {"Don't have an account? "}
            <Link to="/register" variant="body2">
              Register
            </Link>
          </Typography>

              </Grid> */}
            </Grid>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <div className={styles.forgotPassword}>
    <p>
    Forgot your password? <Link to="/forgot-password">Reset it here</Link>
  </p>
</div></div>
  );
};

export default SignIn;
