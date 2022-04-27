import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as AuthLink } from "react-router-dom";
import { notify } from "../Toastify/Toastify";
import "./AuthForm.css";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://drink818.com/">
        drink-818.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AuthForm({
  title,
  btnText,
  link,
  linkText,
  handleSave,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleSave(data.get("email"), data.get("password"));
  };

  return (
    <div className="authform">
      <ThemeProvider theme={theme}>
        <Grid container component="main">
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            square
            sx={{ backgroundColor: "#405A46" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#405A46",
              }}
            >
              <img
                src="https://media1.giphy.com/media/n60KtJLXeVHkxH7U88/giphy.gif?cid=790b7611138ac6134d3f0e4a78463894c36956432ca89ca3&rid=giphy.gif&ct=ts"
                alt=""
              />
              <Typography className="text" component="h1" variant="h5">
                Be the first to know
              </Typography>
              <br />
              <Typography className="text2" component="h1" variant="h5">
                Sign up for our newsletter for news +
                <br />
                exclusive updates on all-things 818.
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{ color: "black", backgroundColor: "white" }}
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
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#294630" }}
                >
                  {btnText}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/reset" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <AuthLink to={link}>{linkText}</AuthLink>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2"></Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
