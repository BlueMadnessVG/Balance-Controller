import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../router/router.config";

import signupImage from "../../assets/img/cat_signup.png";
import googleIcon from "../../assets/icons/google-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import twitterIcon from "../../assets/icons/x-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between md:grid md:grid-cols-2 w-full h-[100vh] overflow-hidden">
      <div className="flex flex-col gap-3 px-10 py-10 md:px-24 md:py-56 ">
        <h2 className="font-bold text-3xl text-text-black">Sign Up</h2>
        <p className="text-md text-zinc-500">
          This function is not working but, here is the design
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-lg border p-1 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-lg border p-1 rounded-md"
          />
          <button className="bg-green-primary rounded-lg text-lg font-light text-white">
            Sign up
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
      <div className="relative text-text-black">
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-green-secondary bottom-[-140vw] md:bottom-[-118vw]  md:top-[-112vw] left-[-50vw] md:left-[1vw] rounded-[50%] mix-blend-multiply"
          layoutId="circle-bg"
        />
        <div className="flex w-full h-full p-10 justify-center">
          <div className="flex flex-col w-[80%] justify-between">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl md:text-3xl font-bold mt-10">
                One of us ?
              </h1>
              <h2 className="text-md md:text-lg text-center">
                Some message for a new user, here is the perfect spot to take
                the attention of a new user.
              </h2>
              <a
                className="bg-green-accent text-white rounded-xl py-2 px-4 text-sm md:text-lg font-light"
                onClick={() =>
                  navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
                }
              >
                SIGN IN
              </a>
            </div>

            <img src={signupImage} alt="" className="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
