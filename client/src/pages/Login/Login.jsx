import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../router/router.config";
import { useDispatch } from "react-redux";
import { AuthKey, logOut, setCredentials } from "../../global/states/auth";
import { useEffect, useState } from "react";
import { clearLocalStorage } from "../../utils/localStorage.utility";
import { motion } from "motion/react";

import loginImage from "../../assets/img/cat_login.png";
import googleIcon from "../../assets/icons/google-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import twitterIcon from "../../assets/icons/x-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import Logo from "../../assets/img/logo_no_text.jsx";
import { postLogin } from "../../services/api.service.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });

  useEffect(() => {
    clearLocalStorage(AuthKey);
    dispatch(logOut());
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = async () => {
    const result = await postLogin(login);
    console.log(result);
    dispatch(setCredentials({ ...result }));
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 w-full h-[100vh] overflow-hidden">
      <div className="relative text-text-black h-[40%] md:h-full">
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-green-secondary top-[-140vw] md:top-[-118vw] right-[-50vw] md:right-[1vw] rounded-[50%] mix-blend-multiply"
          layoutId="circle-bg"
        />
        <div className="flex w-full h-full md:p-10 justify-center">
          <div className="flex flex-col items-center justify-between w-[80%]">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl md:text-3xl font-bold mt-10">
                New Here ?
              </h1>
              <h2 className="text-md md:text-lg text-center">
                Some message for a new user, here is the perfect spot to take
                the attention of a new user.
              </h2>
              <a
                className="bg-green-accent text-white rounded-xl py-2 px-4 text-sm md:text-lg font-light"
                onClick={() =>
                  navigate(`/${PublicRoutes.SIGNUP}`, { replace: true })
                }
              >
                SIGN UP
              </a>
            </div>

            <img src={loginImage} alt="" className="hidden md:block" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-10 md:px-24 md:py-56 ">
        <div className="text-green-primary size-28 mx-auto">
          <Logo />
        </div>
        <h2 className="font-bold text-3xl text-text-black">Login</h2>
        <p className="text-md text-zinc-500">
          If you already a member, easily log in
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChange}
            className="text-lg border p-1 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            className="text-lg border p-1 rounded-md"
          />
          <button
            className="bg-green-primary rounded-lg text-lg font-light text-white"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="grid grid-cols-3 items-center text-zinc-400">
            <hr className="border-zinc-400" />
            <p className="text-center text-md"> or </p>
            <hr className="border-zinc-400" />
          </div>
          <div className="grid grid-cols-4 items-center justify-items-center">
            <img src={googleIcon} alt="google" className="w-10 h-10" />
            <img src={facebookIcon} alt="google" className="w-10 h-10" />
            <img src={twitterIcon} alt="google" className="w-10 h-10" />
            <img src={linkedinIcon} alt="google" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
