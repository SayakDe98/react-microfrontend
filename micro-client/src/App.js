import React, { lazy, Suspense } from "react";
import "./styles.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

const LoginPage = lazy(() => import("FIRST_APP/pages/login"));

const App = () => {

  return (
    <>
      <div>
        <Router>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100vw",
                  height: "100vh",
                  color: "white",
                  backgroundColor: "black",
                  fontFamily: "sans-serif",
                }}
              >
                <h1>Loading...</h1>
              </div>
            }
          >
            <Routes>
              <Route Component={Home} path="/" />
              <Route element={<Suspense fallback="loading"><LoginPage /></Suspense>} path="/login" />
              {/* <Route element={
              <Suspense fallback={<div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100vw",
                  height: "100vh",
                  color: "white",
                  backgroundColor: "black",
                  fontFamily: "sans-serif",
                }}
              >
                <h1>Loading...</h1>
              </div>}
             >{
             LoginPage
             } </Suspense>
             } path="/login" /> */}
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default App;
