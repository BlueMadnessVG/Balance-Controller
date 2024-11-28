import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../router/router.config";
import RoutesWithNotFound from "../../utils/routes-with-not-found";
import Sidebar from "../../components/sidebar/Sidebar";
import { lazy } from "react";
import { motion } from "motion/react";
import Footer from "../../components/footer/Footer";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Balance = lazy(() => import("./Balance/Balance"));
const Analytics = lazy(() => import("./Analytics/Analytics"));
const Profile = lazy(() => import("./Profile/Profile"));

function Private() {
  return (
    <div className="flex flex-col md:flex-row w-full h-[100vh]">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      <main className="w-full h-full">
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          <Route path={PrivateRoutes.BALANCE} element={<Balance />} />
          <Route path={PrivateRoutes.ANALYTICS} element={<Analytics />} />
          <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        </RoutesWithNotFound>
      </main>

      <footer className="block md:hidden h-[14vw]">
        <Footer />
      </footer>
    </div>
  );
}
export default Private;
