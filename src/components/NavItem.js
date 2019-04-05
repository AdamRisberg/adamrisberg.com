import React from "react";

function NavItem({ onClick, href, label, className = "", children }) {
  return (
    <li className={className}>
      <a onClick={onClick} href={href}>
        {children || label}
      </a>
    </li>
  );
}

export default NavItem;
