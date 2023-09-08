import { useState } from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { LoginAPI, GoogleSignInAPI } from "../API/AuthAPI";
import { NavLink } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import "../style/loginpage.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
function LoginComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login =async () => {
    try {
      let res =await LoginAPI(credentials.email, credentials.password);
      toast.success("Login Successful !");
      localStorage.setItem("userEmail", res.user.email);

      navigate("/home");
    } catch (err) { toast.error("Login failed !");
      return err;
      
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
  const openRegister = () => {
    navigate("/register");
  };
  const data = new Date().getFullYear();

  return (
    <div className="container">
      <div className="main">
        <div className="nav">
          <img src="/profilink.png" alt="logo" />
          <div className="right_nav">
            <div className="nav_icon">
              <Tooltip title="Article">
                <IconButton>
                  <ArticleIcon className="icon" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Peoples">
                <IconButton>
                  <PeopleAltIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Learnings">
                <IconButton>
                  <OndemandVideoIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Jobs">
                <IconButton>
                  <BusinessCenterIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="line"></div>
            <div className="btn_nav">
              <button className="btn" onClick={openRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="left_header">
            <h1>Build your Professional career</h1>
            <div className="Login_input">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter email Id"
                onChange={(event) =>setCredentials({ ...credentials, email: event.target.value })
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
                style={{ position: "relative", top: "-37px", left: "420px" }}
              />
              <div className="buttons">
                <NavLink className="forgot">Forgot password?</NavLink>
                <button onClick={login}>Log in</button>
                <div className="or">
                  <span className="dash"></span>or{" "}
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
                      navigate("/register");
                    }}>
                    New to Profilink? Join now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="right_header">
            <img src="/header.svg" alt="header image" />
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="heading">Find the right job or internship for you </div>
        <div className="chips">
        <Stack direction="row" spacing={1}>
          <Chip
            label="Engineering"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Business Management"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Finance"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Business Development"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Administrative Assistant"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Retail Associate"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Information Technology"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Purchasing"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Adminastrative"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Legal"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Healthcare Service"
            component="a"
            variant="outlined"
            size="medium"
          />
        </Stack>
      </div>
      </div>
      <div className="below">
                    <div className="one">
                      <h1>Find the job easily</h1>
                      <img src="/1.svg" alt="" />
                    </div>
                    <div className="one">
                      <img src="/5.svg" alt="" />
                      <h1>Grow with your profesional career </h1>

                    </div>
                    <div className="one">
                      <h1>Enhance business skills</h1>
                      <img src="/3.svg" alt="" />
                    </div>
                    <div className="one">
                      <img src="/4.svg" alt="" />
                      <h1>connect with Professional</h1>

                    </div>
                   
      </div>
      <div className="footer">
        <div className="sub_footer">
          <div className="foot">
            <img src="/profilink.png" alt="" />
          </div>
          <div className="foot">
            <h4>General</h4>
            <ul>
              <li>Sign up</li>
              <li>Help center</li>
              <li>About</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="foot">
            <h4>Browse profilink</h4>
            <ul>
              <li>Learning</li>
              <li>Job</li>
              <li>Salary</li>
              <li>Mobile</li>
              <li>Service</li>
              <li>Product</li>
            </ul>
          </div>
          <div className="foot">
            <h4>Business Solution</h4>
            <ul>
              <li>Talent</li>
              <li>Marketing</li>
              <li>Sales</li>
              <li>Learning</li>
            </ul>
          </div>
         
        </div>
        <div className="sub">
          <img src="/profilink.png" alt="" />
          <p> &copy;{data}</p>
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

export default LoginComponent;
