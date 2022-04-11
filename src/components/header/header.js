import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { ThemeContext } from "../../theme-context";
import { auth } from "../../api/firibase";
import styles from "./header.module.css";

const menuWithSession = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

const menuWithoutSession = [
  { title: "Login", to: "/login" },
  { title: "Sign-up", to: "/sign-up" },
];

export function Header({ session }) {
  const { themeSetter, theme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="primary" className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            LOGO
          </Typography>

          {!!session && (
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menuWithSession.map((item) => (
                <Button
                  key={item.to}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={item.to} className={styles.link}>
                    {item.title}
                  </Link>
                </Button>
              ))}
            </Box>
          )}

          {!!session && <button onClick={() => signOut(auth)}>out</button>}

          {!session && (
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menuWithoutSession.map((item) => (
                <Button
                  key={item.to}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={item.to} className={styles.link}>
                    {item.title}
                  </Link>
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <button onClick={() => themeSetter("light")}>light</button>
            <button onClick={() => themeSetter("dark")}>dark</button>
            <span style={{ color: theme.theme.color }}>{theme.name}</span>
            <IconButton sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
