import Profile from "../../assets/icons/profile.jsx";
import Dashboard from "../../assets/icons/dashboard.jsx";
import Balance from "../../assets/icons/balance.jsx";
import Analytics from "../../assets/icons/analytics.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Dashboard");

  const handleClick = (title) => {
    setSelected(title);
    navigate(`/private/${title}`, { replace: true });
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-12">
      <button
        onClick={() => handleClick("Dashboard")}
        className={`grid size-10 text-text-black ${
          selected === "Dashboard" && "text-green-primary"
        }`}
      >
        <Dashboard />
      </button>
      <button
        onClick={() => handleClick("Balance")}
        className={`grid size-10 text-text-black ${
          selected === "Balance" && "text-green-primary"
        }`}
      >
        <Balance />
      </button>
      <button
        onClick={() => handleClick("Analytics")}
        className={`grid size-10 text-text-black ${
          selected === "Analytics" && "text-green-primary"
        }`}
      >
        <Analytics />
      </button>
      <button
        onClick={() => handleClick("Profile")}
        className={`grid size-10 text-text-black ${
          selected === "Profile" && "text-green-primary"
        }`}
      >
        <Profile />
      </button>
    </div>
  );
}
export default Footer;
