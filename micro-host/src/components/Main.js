import * as React from 'react';
import App from './App';
import "./styles.css";
import Footer from './Footer';

export default function MainApp() {
  const [name, setName] = React.useState(null);
  return (
    <>
      <App onChange={(e) => setName(e.target.value)} />
      <h3 style={{ textAlign: "center" }}>
        {name ? <p>Your name is: {name}</p> : null}
      </h3>
      <Footer backgroundColor="black" color="white" fontSize={20}>
        <h1 style=
        {{
          textAlign: "initial",
          width: "100vw",
          margin: 0,
          marginLeft: "50px",
        }}>Footer</h1>
      </Footer>
    </>
  );
}
