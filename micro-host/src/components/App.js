import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import TopBar from './TopBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function App({ onChange }) {
  // const navigate = useNavigate();
  const firstAppUrl = "http://localhost:8080";
  const secondAppUrl = "http://localhost:8081";
  const whichApp = window.location.origin.includes("8080") ? 1 : 2;
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home onChange={onChange}/>}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </Router>
      {/* <TopBar backgroundColor="black" color="white" fontSize={20}>
        <h1 style={{ textAlign: "initial", width: "100vw", margin: 0, marginLeft: "50px" }}>Micro App</h1>
      </TopBar>
      <div className="MicroApp">
        <input onChange={onChange} type="text" placeholder="Enter your name" />
        <a
          style={{
            color: whichApp === 1 ? "green" : "red",
            textDecoration: "none",
            marginTop: "20px",
          }}
          href={whichApp === 1 ? secondAppUrl : firstAppUrl}
        >
          <b>Go to {whichApp === 1 ? "second" : "first"} app</b>
        </a>
      </div> */}
    </>
  );
}
