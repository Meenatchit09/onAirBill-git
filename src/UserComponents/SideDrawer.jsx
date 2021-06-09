import React from "react";
import Button from "./Button";
import {
  faTachometerAlt,
  faCog,
  faUsers,
  faTruckMoving,
  faMoneyBillAlt,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthenticationService from '../Services/AuthenticationService';

import "./index.scss";

const SideDrawer = (props) => {
  return (
    <nav className={`side-drawer ${props.show && "open"}`}>
      <div className="side-drawer-header"></div>
      <div className="ml-3 mt-3">
      <a className="navbar-button text-center" href="/dashboard">
          HOME
        </a>
        <a className="navbar-button text-center" href="/settings">
          FEATURES
        </a>
        <a className="navbar-button text-center" href="/customers"> 
          PRICING
        </a>
        <a className="navbar-button text-center" href="/transport">
          ABOUT
        </a>
        <a className="navbar-button text-center" href="/products">
          <button>login</button>
        </a> 
        </div>
    </nav>
  );
};

export default SideDrawer;
