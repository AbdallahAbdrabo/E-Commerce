import { useState } from "react";
import Cards from "./card";
import NavBar from "./navbar";
import Profile from "./profile";
import Myorder from "./myorder";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home({ tok, isAuth }) {
  const [state, setState] = useState("home");
  return (
    <>
      {isAuth && (
        <div className="home-container1">
          <NavBar setState={setState} />
          <div className="home-container">
            {state === "home" && <Cards tok={tok} />}
            {state === "profile" && <Profile setState={setState} />}
            {state === "myorder" && <Myorder />}
          
          </div>
          <div className="chatbutton">
              <Chatbotbutton />
            </div>
            <Footer/>
        </div>
        
      )}
    </>
  );
}

function Chatbotbutton() {
  const navigate = useNavigate();
 function handelclick(){
  navigate("/Chatbot"); 
 }
  return (
    <>
      <button type="button" class="btn btn-light  " onClick={handelclick} >
        <i class="bi bi-robot fs-1"></i>
      </button>
    </>
  );
}
