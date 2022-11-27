import React from "react";
import "./RealEstate.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

function CommonPage({ children }) {
  const [showpages, setShowPages] = useState(false);
  const navigate = useNavigate();
  let name = localStorage.getItem("name").toUpperCase();

  return (
    <section className="property">
      <aside className="asideLeft">
        <div>
          <img
            className="logo"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png"
            alt="Logo"
          />
        </div>
        <ul className="data">
          <li>
            <b>Property</b>
          </li>
          <li>Assistance</li>
          <li>Received Interest</li>
          <li>Send Interest</li>
          <li>Property Views</li>
          <li>Tariff Plan</li>
        </ul>
      </aside>
      <aside className="asideRight">
        <header className="header">
          <div>USER ID :{localStorage.getItem("userid")}</div>
          <div>
            USER NAME : {name}
            <AiFillCaretDown
              className="drop_down"
              onClick={() => {
                setShowPages(!showpages);
              }}
            />
            {showpages ? <Logout /> : null}
          </div>
        </header>
        <div className="commonPage">{children}</div>
      </aside>
    </section>
  );
}

export default CommonPage;
