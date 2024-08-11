"use client";
import { useState } from "react";
import Image from "next/image";

function LoginJoin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container flex min-w-full min-h-screen  flex-row justify-between font-Poppins">
      <div className="login-form w-[53%] min-h-full p-6 text-center flex justify-center items-center">
        <div className="form-container w-[60%] text-start h-[90%] dispaly flex flex-col   justify-between items-center">
          <div className="intro text-start w-[100%]  ">
            <h2 className="text-3xl mb-7 font-Urbanist">WELCOME BACK 👋</h2>
            <p>Today Is A New Day. It&apos;s Your Day. You Shape It.</p>
            <p className="mt-2">Sign In To Start Managing Your Projects.</p>
          </div>
          <form onSubmit={handleSubmit} className="form w-full h-[50%] ">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md "
              />
            </div>
            <p className="text-right text-login-Link my-5">
              <a href="#">Forgot Password?</a>
            </p>
            <button
              type="submit"
              className="btn w-full rounded-lg bg-login-btn p-4 text-xl text-login-btnText"
            >
              Sign In
            </button>
          </form>
          <div className="social-login flex flex-col justify-between w-[100%] h-[25%] items-center">
  <div className="flex items-center justify-center w-full my-4">
    <hr className="flex-grow border-gray-300" />
    <span className="mx-2 text-gray-500">Or</span>
    <hr className="flex-grow border-gray-300" />
  </div>
  <div className="w-[100%] h-[60%] text-center">
    <button className=" bg-login-inputbg text-login-Secondarytext p-3 w-[70%] rounded-md">
      <img
        src="/images/login-google.svg"
        alt="google"
        className="inline-flex"
      />{" "}
      Sign in with Google
    </button>
    <button className=" bg-login-inputbg text-login-Secondarytext mt-4 p-3 w-[70%] rounded-md">
      <img
        src="/images/login-facebook.svg"
        alt="facebook"
        className="inline-flex"
      />{" "}
      Sign in with Facebook
    </button>
  </div>
</div>

          <p className="text-login-Primarytext font-semibold tracking-wide">
            Don&apos;t you have an account? <a href="#" className="text-right text-login-Link my-5">Sign Up</a>
          </p>
        </div>
      </div>
      <div className="image-container w-[47%]  h-screen overflow-hidden p-6">
        <Image
          src="/images/bg2.png"
          alt="login"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default LoginJoin;
