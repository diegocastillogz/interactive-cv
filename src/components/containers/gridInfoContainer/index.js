import React from "react";
import InfoContainerItem from "components/shared/infoContainerItem";
import styles from "./gridInfoContainer.module.scss";

const GridInfoContainer = ({ GridData }) => (
  <div className={styles.gridInfoContainer}>
    {GridData?.image?.src && (
      <div className={styles.gridInfoContainer__image}>
        <img src={GridData.image.src} alt={GridData.image.alt} />
      </div>
    )}
    {GridData?.data.length &&
      GridData.data.map((itemData, index) => (
        <InfoContainerItem key={index} itemData={itemData} />
      ))}
  </div>
);

export default GridInfoContainer;
