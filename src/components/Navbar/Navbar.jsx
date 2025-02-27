import { Link, useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";
import ProductsByCategory from "../ProductsByCategory/ProductsByCategory";
import Logo from "../../assets/images/tmlogo.jpg";
import "./Navbar.css";
import iconmenu from "../../assets/images/menu-icon.png";

function Navbar({ onSearch }) {
  const [selectedTab, setSelectedTab] = useState("home");
  const [searchInput, setSearchInput] = useState("");
 
  const navigate = useNavigate();
  const location =useLocation();

  useEffect(() =>{
    setSelectedTab(location.pathname);
  }, [location.pathname]);
   
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput); 
    
  };
  return (
    <nav className="Navbar">
      <img className = "logoimage" src={Logo} />
      <div class="iconmenu"><img src={iconmenu} alt="iconmenu" /></div>
      <Tabs
        defaultValue={"home"}
        value={selectedTab}
        onChange={(e, v) => {navigate(v)}}
        sx={{height:"100%"}}
        classes={{ indicator: 'indicator'}}
      >
        
        <Tab classes={{ root: 'tab' }} value={"/"} label="Home">
          Home
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/about"} label="About">
          About
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/electronics"} label="ELECTRONICS">
          Electronics
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/jewelery"} label="JEWELERY">
          Jewelery
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/menclothing"} label="MEN">
          Men's clothing
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/womenclothing"} label="WOMEN">
          Women's clothing
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/products/create"} label="CREATE">
         Create 
        </Tab>
      </Tabs>
      
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
