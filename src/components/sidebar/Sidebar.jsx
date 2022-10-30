import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import { IoIosList } from "react-icons/io";
import { IoIosGift } from "react-icons/io"; 
import { GoPackage } from "react-icons/go"; 
import { FaCubes } from "react-icons/fa"; 
import { AiFillDashboard } from "react-icons/ai";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">ANYWASH</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN NAVIGATION</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
          <li>
            <AiFillDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          {/* <p className="title">LISTS</p> */}
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li>
              <IoIosList className="icon" />
              <span>Services</span>
            </li>
          </Link>
          <Link to="/vouchers" style={{ textDecoration: "none" }}>
          <li>
            <IoIosGift className="icon" />
            <span>Vouchers</span>
          </li>
          </Link>
          <Link to="/vendors" style={{ textDecoration: "none" }}>
          <li>
            <StoreIcon className="icon" />
            <span>Vendors</span>
          </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
          {/* <p className="title">USEFUL</p> */}
          <li>
            <GoPackage className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
          <li>
            <FaCubes className="icon" />
            <span>Transactions</span>
          </li>
          </Link>
          <Link to="/paymentmethods" style={{ textDecoration: "none" }}>
          {/* <p className="title">SERVICE</p> */}
          <li>
            <CreditCardIcon className="icon" />
            <span>Payment Method</span>
          </li>
          </Link>
          {/* <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <Link to="/login" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
