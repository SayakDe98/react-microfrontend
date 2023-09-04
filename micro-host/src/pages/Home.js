import React from 'react'
import TopBar from '../components/TopBar';

const Home = ({ onChange }) => {
     const firstAppUrl = "http://localhost:8080";
     const secondAppUrl = "http://localhost:8081";
     const whichApp = window.location.origin.includes("8080") ? 1 : 2;
  return (
    <>
      <TopBar backgroundColor="black" color="white" fontSize={20}>
        <h1
          style={{
            textAlign: "initial",
            width: "100vw",
            margin: 0,
            marginLeft: "50px",
          }}
        >
          Micro App
        </h1>
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
      </div>
    </>
  );
}

export default Home