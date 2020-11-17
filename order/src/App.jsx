import { Divider, ThemeProvider, Typography } from "@material-ui/core";

import Dialog from "./Dialog";
import { HashRouter } from "react-router-dom";
import React from "react";
import { theme } from "./theme";

const Page = React.lazy(() => import("admin/Page"));

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={null}>
          <Page title="Order">
            <Typography variant="h6">Dialog Component</Typography>
            <Dialog />
            <Divider style={{ margin: "16px 0" }} />
          </Page>
        </React.Suspense>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
