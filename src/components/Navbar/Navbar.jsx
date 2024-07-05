import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import notifyIcon from "../../assets/notificationIcon.png";
import userIcon from "../../assets/userIcon.png";
import searchIcon from "../../assets/searchIcon.png";
import { ProductContext } from "../../context/ProductContext";

const Navbar = () => {
  const { setItemSearch } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  const inputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setItemSearch(searchQuery);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="navbar-right">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-box">
              <button type="submit" className="search-button">
                <img src={searchIcon} alt="Search" className="search-icon" />
              </button>
              <input
                className="input"
                type="text"
                placeholder="Search by patients..."
                value={searchQuery}
                onChange={inputHandler}
              />
            </div>
          </form>
          <div className="icons">
            <img className="notify-icon" src={notifyIcon} alt="" />
            <img className="user-icon" src={userIcon} alt="" />
            <div>
              <p>Deko</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
