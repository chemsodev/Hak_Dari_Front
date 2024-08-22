"use client";
import { useState } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { Poppins } from "next/font/google";

const urbanist = Urbanist({
  weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", Address);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div
      className={`container flex min-w-full min-h-screen lg:flex-row justify-between ${poppins.className} flex-col-reverse`}
    >
      <div className="signup-form w-[100%] lg:w-[50%] min-h-full lg:p-6 text-center flex justify-center items-center md:h-auto h-[100%]">
        <div className="form-container w-[80%] lg:w-[60%] text-start  h-[100%] flex flex-col justify-between items-center">
          <div className={`intro text-start w-[100%]  font-normal`}>
            <h2 className={`${urbanist.className} text-3xl font-extrabold`}>
            Create an Account
            </h2>
            <p  className="lg:mt-7 mt-5">Today Is A New Day. It&apos;s Your Day. You Shape It.</p>
            <p className="mt-2">Sign Up To Start Managing Your Projects.</p>
          </div>
          <form onSubmit={handleSubmit} className="form w-full h-[70%] flex flex-col justify-between Items-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="font-medium">
                Address
              </label>
              <input
                type="Address"
                id="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
            </div>
           
              <button
                type="submit"
                className="btn w-full rounded-lg bg-login-btn p-4 text-xl text-login-btnText font-medium"
              >
            Create an Account 
              </button>
          </form>
          <p className="text-login-Primarytext  tracking-wide font-medium min-w-80 lg:mt-5 mt-2">
            Already have an Account?{" "}
            <a href="#" className="text-right text-login-Link ">
              Log In
            </a>
          </p>
        </div>
      </div>
      <div className="image-container w-full h-[45vh] lg:w-[50%] relative top-0 lg:h-screen overflow-hidden p-6 lg:sticky">
        <Image
          src="/images/bg1.png"
          alt="login"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default SignupPage;
