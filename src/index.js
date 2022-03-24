import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, ChatList, Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";

import "./global.css";

const App = () => {
  return (
    <>
      <Layout
        messages={<MessageList />}
        chats={<ChatList />}
        header={<Header />}
      />
    </>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#17212b",
    },
  },
  breakpoints: {
    keys: ["lg", "sm"],
    values: {
      lg: 1200,
      sm: 320,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
