import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, ChatList, Header } from "./components";

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
    // primary: {
    //   // main: "#ff0000",
    // },
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
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
