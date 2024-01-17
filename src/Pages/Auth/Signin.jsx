import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import { auth, fireDB } from "../../Firebase/FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";
import InputField from "./AuthInputField";
import ActionButton from "./ActionButton";
import GoogleAuthButton from "./GoogleAuthButton";
import * as IconsAndImages from "../../Assets/IconsAndImages";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const loading = context.loading;
  const setLoading = context.setLoading;

  const signin = async () => {
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Welcome back !");
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      toast.error("Signin Failed");
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    const element = document.body;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Layout>
        {loading && <Loader />}
        <img src={IconsAndImages.AuthBG37} className="w-full h-[620px] absolute"/>
        <div className="relative mx-auto my-8 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 bg">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-4xl font-[Fahkwang] font-bold text-teal-600 px-2 py-2 underline underline-offset-4 mb-4">
                Shopaholic
              </h1>
              <h2 className="font-[Montserrat] text-3xl font-semibold text-gray-900">
                Sign in
              </h2>
              <p className="font-[Montserrat] mt-2 text-gray-500">
                Sign in below to access your account
              </p>
            </div>

            <div className="mt-5">
              <div>
                <InputField
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<IconsAndImages.FaEnvelope />}
                />
                <InputField
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<IconsAndImages.FaLock />}
                />
                <div className="flex justify-center my-6">
                  <ActionButton label="Sign in" onClick={signin} />
                </div>
                
                <div className="flex items-center justify-center">
                  <span className="w-1/3 h-[2px] bg-gray-500"></span>
                  <div className="">
                    <p className="font-[Montserrat] mx-2">OR</p>
                  </div>
                  <span className="w-1/3 h-[2px] bg-gray-500"></span>
                </div>
                <GoogleAuthButton label="Sign in with Google" />
                <p className="font-[Montserrat] text-center text-sm text-gray-500">
                  Don't have an account yet?
                  <Link
                    to={"/signup"}
                    onClick={scrollToTop}
                    className="font-[Montserrat] text-gray-600 font-bold hover:text-teal-600 transform-transition duration-500 hover:underline underline-offset-2 focus:text-gray-800 focus:outline-none"
                  >
                    Signup
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Signin;
