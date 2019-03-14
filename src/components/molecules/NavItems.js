import React from "react";
import NavItem from "../atoms/NavItem";

const NavItems = props => {
    const determine

  return (
    <div>
      <li>
        <NavItem name="Blog" route="/blog" selected={blogSelected}/>
      </li>
      <li>
        <NavItem name="About me" route="/about_me" />
      </li>
      <li>
        <NavItem name="Experience" route="/experience" />
      </li>
      <li>
        <NavItem name="Interests" route="/interests" />
      </li>
      <li>
        <NavItem name="Contact" route="/contact" />
      </li>
    </div>
  );
};
