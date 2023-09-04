import * as React from 'react';
import "./styles.css";

export default function App({ onChange }) {
  const firstAppUrl = "http://localhost:8080";
  const secondAppUrl = "http://localhost:8081";
  const whichApp = window.location.origin.includes("8080") ? 1 : 2;
  return (
    <>
      <div className="MicroApp">
        <h1>Micro App</h1>
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
