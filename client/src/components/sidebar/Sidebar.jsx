import { useState } from "react";
import { motion } from "motion/react";
import TitleSection from "./TitleSection";
import Option from "./Option";

import profile from "../../assets/icons/profile.jsx";
import dashboard from "../../assets/icons/dashboard.jsx";
import balance from "../../assets/icons/balance.jsx";
import analytics from "../../assets/icons/analytics.jsx";
import CloseButton from "./CloseButton.jsx";
import { PrivateRoutes } from "../../router/router.config.js";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 p-2 bg-white"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <TitleSection open={open} />
      <div className="space-y-2">
        <Option
          Icon={dashboard}
          title={PrivateRoutes.DASHBOARD}
          open={open}
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={balance}
          title={PrivateRoutes.BALANCE}
          open={open}
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={analytics}
          title={PrivateRoutes.ANALYTICS}
          open={open}
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={profile}
          title={PrivateRoutes.PROFILE}
          open={open}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <CloseButton open={open} setOpen={setOpen} />
    </motion.nav>
  );
}
export default Sidebar;
