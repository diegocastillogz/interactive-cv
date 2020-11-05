import Layout from "components/containers/layout";
import Stars from "components/shared/stars";
import GridInfoContainer from "components/containers/gridInfoContainer";
import { GENERAL_INFO } from "components/constant/pages";
import { Fragment } from "react";

const App = () => (
  <Fragment>
    <Stars />
    <Layout>
      <div className="title-container">
        <h1>curriculum vitae</h1>
        <h2>
          diego castillo <span>software / web developer</span>
        </h2>
      </div>

      <GridInfoContainer GridData={GENERAL_INFO} />
    </Layout>
  </Fragment>
);

export default App;
