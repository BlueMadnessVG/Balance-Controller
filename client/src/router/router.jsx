import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import store from "../global/store";
import { AnimatePresence } from "motion/react";
import { PrivateRoutes, PublicRoutes } from "./router.config";
import AuthGuard from "../guard/auth.guard";
import RoutesWithNotFound from "../utils/routes-with-not-found";

const Login = lazy(() => import("../pages/Login/Login"));
const Signup = lazy(() => import("../pages/Signup/Signup"));
const Private = lazy(() => import("../pages/Private/Private"));

export const AppRouter = () => {
  return (
    <Suspense fallback={<> Loading... </>}>
      <Provider store={store}>
        <AnimatePresence initial={true}>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithNotFound>
        </AnimatePresence>
      </Provider>
    </Suspense>
  );
};
