import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./AuthInputField";
import ActionButton from "./ActionButton";
import GoogleAuthButton from "./GoogleAuthButton";
import Layout from "../../Components/Layout/Layout";
import * as IconsAndImages from "../../Assets/IconsAndImages";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyContext from "../../Context/MyContext";
import Loader from "../../Components/Loader/Loader";
import { auth, fireDB } from "../../Firebase/FireBaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    )
      return toast.error("All fields are required");
    if (password !== confirmPassword)
      return toast.error("Password not matched");

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Account created");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
    } catch (error) {
      toast.error("Error creating the account");
      setLoading(false);
    }
  };

  // Google sign-up
  const signupWithGoogle = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const { displayName, uid, email } = result.user;

      const user = {
        name: displayName || "Google User",
        uid: uid,
        email: email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      toast.success("Signed up with Google!");
      setLoading(false);
    } catch (error) {
      toast.error("Error signing up with Google");
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
        <img
          src={IconsAndImages.AuthBG37}
          className="w-full h-[744px] absolute"
        />
        <div className="relative mx-auto my-8 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-4xl font-[Fahkwang] font-bold text-teal-600 px-2 py-2 underline underline-offset-4 mb-4">
                Shopaholic
              </h1>
              <h2 className="text-3xl font-[Montserrat] font-semibold text-gray-900">
                Sign up
              </h2>
              <p className="font-[Montserrat] mt-2 text-gray-500">
                Create your account
              </p>
            </div>
            <div className="mt-5">
              <InputField
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                icon={<IconsAndImages.FaUserCircle />}
              />
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
              <InputField
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={<IconsAndImages.FaLock />}
              />

              <div className="flex justify-center my-6">
                <ActionButton label="Sign up" onClick={signup} />
              </div>

              <div className="flex items-center justify-center">
                <span className="w-1/3 h-[2px] bg-gray-500"></span>
                <div className="">
                  <p className="font-[Montserrat] mx-2">OR</p>
                </div>
                <span className="w-1/3 h-[2px] bg-gray-500"></span>
              </div>

              <GoogleAuthButton
                label="Sign up with Google"
                onClick={signupWithGoogle}
              />
              <p className="font-[Montserrat] text-center text-sm text-gray-500">
                Already have an account?
                <Link
                  to={"/signin"}
                  onClick={scrollToTop}
                  className="font-[Montserrat] text-gray-600 font-bold hover:text-teal-600 transform-transition duration-500 hover:underline underline-offset-2 focus:text-gray-800 focus:outline-none"
                >
                  Sign in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Signup;
