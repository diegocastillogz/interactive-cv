import React, { Fragment } from "react";
import styles from "./stars.module.scss";
import ufoImage from "assets/images/ovni.svg";

const Stars = () => (
  <Fragment>
    <div className={styles.stars}>
      <div />
      <div />
      <div />
      <img className={styles.ufo} src={ufoImage} alt="UFN" />
    </div>
  </Fragment>
);

export default Stars;
