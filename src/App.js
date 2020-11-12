import Layout from "components/containers/layout";
import Stars from "components/shared/stars";
import { Fragment, useState } from "react";
import MainView from "components/views/mainView";
import Navbar from "components/shared/navbar";

const App = () => {
  const [selectedView, setSelectedView] = useState(0);

  const getSelectedView = () => {
    switch (selectedView) {
      case 0:
        return <MainView />;

      default:
        return <MainView />;
    }
  };

  return (
    <Fragment>
      <Stars />
      <Layout>
        {getSelectedView()}
        <Navbar selectedView={selectedView} setSelectedView={setSelectedView} />
      </Layout>
    </Fragment>
  );
};

export default App;
