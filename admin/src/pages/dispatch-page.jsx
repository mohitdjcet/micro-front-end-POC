import Page from "../Page";
import React from "react";

const Dispatch = React.lazy(() => import("dispatch/Dialog"));

const RoutingPage = () => (
  <Page title="Dispatch">
    <React.Suspense fallback="Loading Tabs...">
      <Dispatch />
    </React.Suspense>
  </Page>
);

export default RoutingPage;
