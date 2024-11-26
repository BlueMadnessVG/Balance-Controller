import { Suspense } from "react";
import { Provider } from "react-redux";
import { Routes, useLocation } from "react-router-dom";
import store from "../global/store";
import { AnimatePresence } from "motion/react";
import { PublicRoutes } from "./router.config";

export const AppRouter = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<> Loading... </>}>
      <Provider store={store}>
        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route path={PublicRoutes.LOGIN} />
            <Route path="*" element={<>NOT FOUND</>} />
          </Routes>
        </AnimatePresence>
      </Provider>
    </Suspense>
  );
};
