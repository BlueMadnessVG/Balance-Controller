import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../router/router.config";
import { useDispatch } from "react-redux";
import { AuthKey, logOut, setCredentials } from "../../global/states/auth";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utils/localStorage.utility";
import { motion } from "motion/react";

import loginImage from "../../assets/img/cat_login.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(AuthKey);
    dispatch(logOut());
  });

  const login = async () => {
    const result = { token: "aToken" };
    dispatch(setCredentials({ ...result }));
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 w-full h-[100vh] overflow-hidden">
      <div className="relative text-text-black h-[40%] md:h-full">
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-green-secondary top-[-112vw] right-[-50vw] md:right-[1vw] rounded-[50%] mix-blend-multiply"
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
      <div className="">
        <h2 className="font-bold text-2xl text-text-black">Login</h2>
        <form action="" className="flex flex-col">
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button> Login </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
