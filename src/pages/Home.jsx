import React,{useEffect,useState} from "react";
import HomeComponent from "../component/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../component/common/loader";
function Home() {
    const [loading,setLoading]=useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      }else{
        setLoading(false)
      }
    });
  }, []);
  return loading? <Loader/>:<HomeComponent/>
}

export default Home;
