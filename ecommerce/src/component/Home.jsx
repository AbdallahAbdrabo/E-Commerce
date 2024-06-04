import { useState } from "react";
import Cards from "./card";
import NavBar from "./navbar";
import Profile from "./profile";
import Myorder  from "./myorder";

export default function Home({tok,isAuth}) {
  const [state,setState] = useState('home');
  return (
    <>
{isAuth &&<div>
      <NavBar setState={setState} />
      <div className="home-container">
     {state === 'home' && <Cards tok={tok}/>}
      {state === 'profile' && <Profile setState={setState}/>}
      {state=== 'myorder' && <Myorder/>}
      </div>
      </div>
}
    </>
  );
}
