import { NavLink } from "react-router";
import classNames from "classnames";

export const Link = ({
  children,
  to,
  activeUrlText,
  className,
  activeClass,
}) => {
  // NOTE: fix for reviews link behavior
  const ulrHasActiveText = window.location.pathname.includes(activeUrlText);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(className, { [activeClass]: isActive || ulrHasActiveText })
      }
    >
      {children}
    </NavLink>
  );
};
