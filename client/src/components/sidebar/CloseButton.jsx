import { motion } from "motion/react";
import ArrowRight from "../../assets/icons/arrow-right";

function CloseButton({ open, setOpen }) {
  return (
    <motion.button
      layout
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 bg-white transition-colors hover:bg-slate-100"
      onClick={() => setOpen((pv) => !pv)}
    >
      <div className="flex items-center p-2 gap-3">
        <motion.div layout className="grid size-7 place-content-center text-lg">
          <ArrowRight style={`transition-transform ${open && "rotate-180"}`} />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-md font-bold"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}
export default CloseButton;
