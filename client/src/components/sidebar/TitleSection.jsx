import { motion } from "motion/react";

import Logo from "../../assets/img/logo_no_text.jsx";

function TitleSection({ open }) {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100 ">
        <div className="flex items-center gap-2">
          <motion.div
            layout
            className="grid size-12 p-1 text-white bg-green-primary place-content-center rounded-md "
          >
            <Logo />
          </motion.div>
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xl text-text-black font-bold">
                Smart Pump
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
export default TitleSection;
