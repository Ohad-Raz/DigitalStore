import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { UserContext } from "../../context/UserContext";
import { APIBaseUrl } from "../../config";
import styles from "./Register.module.css"

const defaultTheme = createTheme();

const Register = () => {
  const { setUser } = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  // blur date 

  // const [isInputClicked, setIsInputClicked] = useState(false);

  // const handleInputClick = () => {
  //   setIsInputClicked(true);
  // };

  // const handleInputBlur = () => {
  //   setIsInputClicked(false);
  // };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${APIBaseUrl}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, password, role, birthDate }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        const { user } = data;
        setUser(user);
        setError("");
        console.log(user);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Signup error:", error.message);
      setError(error.message);
    }
  };

  return (
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
             { /*//!no user role in front end option*/}
              {/* <Grid item xs={12}> */}
                {/* <TextField
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                /> */}
              {/* </Grid> */}
              <Grid className={styles.datePicker} item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="birthDate"
                  label="Birth Date"
                  type="date"
                  id="birthDate"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </Grid>
                 {/* <Grid item xs={12}>
      <div className={`${styles.datePicker} ${isInputClicked ? styles.labelVisible : ''}`}>
        <label htmlFor="birthDate" className={styles.dateLabel}>
          Birth Date
        </label>
        <TextField
          required
          fullWidth
          name="birthDate"
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
        />
      </div>
    </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="SignIn" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid> */}
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
