import React, { Fragment } from "react";
import { GENERAL_INFO } from "components/constant";
import GridInfoContainer from "components/containers/gridInfoContainer";

const MainView = () => (
  <Fragment>
    <div className="title-container">
      <h1>diego castillo</h1>
      <h2>software / web developer</h2>
    </div>

    <GridInfoContainer GridData={GENERAL_INFO} />
  </Fragment>
);

export default MainView;
