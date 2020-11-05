import React from "react";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.layout__childrenContainer}>{children}</div>
  </div>
);

export default Layout;
