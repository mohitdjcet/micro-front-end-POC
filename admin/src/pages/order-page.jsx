import Page from "../Page";
import React from "react";

const Order = React.lazy(() => import("order/Modal"));

const RoutingPage = () => (
  <Page title="Order">
    <React.Suspense fallback="Loading Tabs...">
      <Order />
    </React.Suspense>
  </Page>
);

export default RoutingPage;
