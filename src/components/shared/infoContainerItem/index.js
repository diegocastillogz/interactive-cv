import React from "react";
import styles from "./infoContainerItem.module.scss";

const InfoContainerItem = ({ itemData }) => {
  const {
    type = "text",
    text = "",
    title = "",
    href = "",
    mailto = "",
  } = itemData;

  if (type === "text")
    return (
      <div className={styles.item}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );

  if (type === "link")
    return (
      <div className={styles.item}>
        <h3>{title}</h3>
        <p>
          <a target="_blank" href={href}>
            {text}
          </a>
        </p>
      </div>
    );

  if (type === "email")
    return (
      <div className={styles.item}>
        <h3>{title}</h3>
        <p>
          <a href={`mailto:${mailto}`}>{text}</a>
        </p>
      </div>
    );

  return null;
};

export default InfoContainerItem;
