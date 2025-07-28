import { NavLink } from "react-router";
import classNames from "classnames";

export const Link = ({ children, to, replace, className, activeClass }) => {
  return (
    <NavLink
      to={to}
      replace={replace}
      className={({ isActive }) =>
        classNames(className, { [activeClass]: isActive })
      }
    >
      {children}
    </NavLink>
  );
};
