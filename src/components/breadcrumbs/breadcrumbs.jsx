import { Logo } from "../logo/logo.jsx";
import { Link } from "react-router";
import styles from "./breadcrumbs.module.css";

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <>
      <Logo />
      {breadcrumbs?.map((breadcrumb) => (
        <span key={breadcrumb.path || breadcrumb.text}>
          <span className={styles.arrow}>→</span>
          {breadcrumb.path ? (
            <Link className={styles.link} to={breadcrumb.path}>
              {breadcrumb.text}
            </Link>
          ) : (
            <span className={styles.text}>{breadcrumb.text}</span>
          )}
        </span>
      ))}
    </>
  );
};
