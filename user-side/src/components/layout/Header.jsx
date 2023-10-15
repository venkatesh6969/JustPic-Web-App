import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    // const navigate=useNavigate();
    <div className="bg-light text-dark p-4">
        <h1>header</h1>
        <button onClick={()=>navigate("/Login")} >Login/Sign-up</button>
    </div>
  );
};

export default Header;