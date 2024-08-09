import React, { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const EoEApp = lazy(() => import("./EoEApp/EoEApp"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EoEApp />
    </Suspense>
  );
};
export default App;
