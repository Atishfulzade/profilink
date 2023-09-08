import { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../API/AuthAPI";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../style/registerpage.css";

function RegisterComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created successully !");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Email is already in use !");
    }
  };

  const GetGoogle = () => {
    let respo = GoogleSignInAPI();
    console.log(respo);
  };
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const data = new Date().getFullYear();
  return (
    <div className="container">
      <div className="main_register">
        <div className="navbar">
          <img src="/profilink.png" alt="logo" />
        </div>
        <div className="header_main">
          <div className="left_header">
            <img src="/register.svg" alt="header image" />
          </div>
          <div className="right_header">
            <h1>Start your professional career</h1>
            <div className="Login_input">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter email Id"
                onChange={(event) =>
                  setCredentials({ ...credentials, email: event.target.value })
                }
              />

              <label htmlFor="">Password</label>
              <input
                type="password"
                id="myInput"
                placeholder="Enter password"
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    password: event.target.value,
                  })
                }
              />
              <VisibilityIcon
                onClick={myFunction}
                style={{ position: "relative", top: "-35px", right: "-420px" }}
              />
              <div className="header_button">
                <p>
                  By clicking Agree & Join, you agree to the Profilink{" "}
                  <NavLink> User Agreement</NavLink> ,
                  <NavLink>Privacy Policy</NavLink>, and{" "}
                  <NavLink>Cookie Policy</NavLink> .
                </p>
                <button onClick={register}>Agree & Join</button>
                <div className="or">
                  <span className="dash"></span>or
                  <span className="dash"></span>
                </div>
                <div className="other">
                  <button
                    className="nav_link"
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "white",
                      color: "grey",
                    }}
                    onClick={GetGoogle}>
                    <FcGoogle /> Sign in with Google
                  </button>
                  <NavLink
                    className="nav_link"
                    onClick={() => {
                      navigate("/login");
                    }}>
                    Already to Profilink? Login now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="sub">
          <img src="/profilink.png" alt="" />
          <p>&copy;{data}</p>
          <ul>
            <li>About</li>
            <li>Accessibility</li>
            <li>Agreement</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Copyright Policy</li>
            <li>Brand Policy</li>
            <li>Guest Controls</li>
            <li>Community Guidelines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
