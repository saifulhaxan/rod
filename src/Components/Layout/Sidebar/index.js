import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faUser,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import "./style.css";

export const Sidebar = (props) => {

  const location = useLocation()
  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <ul className="list-unstyled">
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/dashboard') ? 'active' : ''}`} to="/dashboard">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faBorderAll} />
            </span>
            <span className="sideLinkText">Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/user-management') ? 'active' : ''}`} to="/user-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="sideLinkText">User Management</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/watcher-management') ? 'active' : ''}`} to="/watcher-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="sideLinkText">Watcher Management</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/feedbacks') ? 'active' : ''}`} to="/feedbacks">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">User Feedbacks</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
