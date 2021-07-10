import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const CustomLink = ({ label, to, activeOnlyWhenExact, icon, ...props }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  let linkStyle = match ? "sidebarListItem active" : "sidebarListItem";
  return (
    <Link to={to} className="link">
      <li className={linkStyle}>
        {icon}
        {label}
      </li>
    </Link>
  );
};

export default CustomLink;
