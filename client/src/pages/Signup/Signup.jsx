import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../router/router.config";

import signupImage from "../../assets/img/cat_signup.png";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between md:grid md:grid-cols-2 w-full h-[100vh] overflow-hidden">
      <div>asdklajsd</div>
      <div className="relative text-text-black">
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-green-secondary bottom-[-112vw] md:top-[-112vw] left-[-50vw] md:left-[1vw] rounded-[50%] mix-blend-multiply"
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
