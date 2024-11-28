import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function Option({ Icon, title, selected, setSelected, open }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(title);
    navigate(`/private/${title}`, { replace: true });
  };

  return (
    <motion.button
      layout
      onClick={handleClick}
      className={`relative flex h-10 w-full items-center rounded-md gap-4 transition-color ${
        selected === title
          ? "bg-green-50 text-green-primary"
          : "text-slate-500 hover:bg-green-50"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-md font-bold"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
}
export default Option;
