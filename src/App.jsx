import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="fblogin" style={{ backgroundColor: "F1F0E9" }}>
      
        
      <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"width={400} alt="" />
      <h2 style={{
        marginBottom:'12px'
      }}>
        Facebook helps you connect and<br></br>share with the people in your
        life.
      </h2>
      <div class="login-fb card">
        <h3>Log in to Facebook</h3>
        <div>
          <label htmlFor="fname">User name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Email adress or phone number"
          />
        </div>

        <div>
          <label htmlFor="lname">Password:</label>

          <input
            type="password"
            id="lname"
            name="lname"
            placeholder="password"
          />
        </div>

        <br />
        <input class="button" type="submit" value="Log in" />
        <a href="#">forgotten button?</a>

        <input class="createbutton" type="submit" value="Create new account" />
      </div>
    </div>
  );
}

export default App;
