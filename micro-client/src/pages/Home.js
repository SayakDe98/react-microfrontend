import React, { lazy } from 'react'
import { Link } from 'react-router-dom';
const FirstApp = lazy(() => import("FIRST_APP/app"));
const Footer = lazy(() => import("FIRST_APP/components/footer"));


const Home = () => {
  const [name, setName] = React.useState(null);

  return (
    <>
      <FirstApp onChange={(e) => setName(e.target.value)} />
      <div className="App">
        <h1>This is second app</h1>
        <h2>Micro host app is integrated here</h2>
        {name ? (
          <p>
            <b>Your name is: {name}</b>
          </p>
        ) : null}
        <Link to="/login">Go to Login Page</Link>
      </div>
      <Footer backgroundColor="black" color="white" fontSize={20}>
        <h1
          style={{
            textAlign: "initial",
            width: "100vw",
            margin: 0,
            marginLeft: "50px",
          }}
        >
          Footer
        </h1>
      </Footer>
    </>
  );
}

export default Home