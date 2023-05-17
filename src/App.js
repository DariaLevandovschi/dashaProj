import Navigation from "./components/Navigation";

import FooterM from "./components/Footer";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <Navigation />
          <ContentLayout />
          <FooterM />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
