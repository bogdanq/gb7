import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Header, PrivateRoute, PublicRoute } from "./components";
import {
  ProfilePage,
  ChatPage,
  GistsPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import { auth } from "./api/firibase";

import "./global.css";

const App = () => {
  // @TODO перенести в redux
  const [session, setSession] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <Header session={isAuth} />

            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute isAuth={isAuth} to="/login">
                    <h1>Home page</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat/*"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gists"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <GistsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<h1>404 page</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
