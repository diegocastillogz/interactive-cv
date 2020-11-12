import React from "react";
import { VIEWS } from "components/constant";
import classnames from "classnames";
import styles from "./navbar.module.scss";

const Navbar = ({ selectedView = 0, setSelectedView = () => {} }) => {
  const getSelectedButtonClass = (index) => {
    let defaultStyle = styles.navbar__viewButton;
    const isSelected = index === selectedView;

    // when the selected view is the first one
    if (index === 0 && isSelected)
      return styles["navbar__viewButton--isFirstselected"];

    // when the selected view is the last one
    if (index === VIEWS.length - 1 && isSelected)
      return styles["navbar__viewButton--isLastselected"];

    // when the selected view is not the first nor the last one
    if (isSelected) return styles["navbar__viewButton--selected"];
    return null;
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        {VIEWS.map((view, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedView(index)}
              className={classnames({
                [styles.navbar__viewButton]: true,
                [getSelectedButtonClass(index)]: true,
              })}
            >
              {view}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
