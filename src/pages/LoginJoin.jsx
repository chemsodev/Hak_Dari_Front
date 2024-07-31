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
            <div className="container flex min-w-full min-h-screen bg-blue-500 flex-row justify-between">
                  <div className="login-form w-[53%] bg-green-500 min-h-full p-6">
                        <h2 className="text-3xl">WELCOME BACK 👋</h2>
                        <p>
                        Today Is A New Day. It&apos;s Your Day. You Shape It.
                        <br />
                        Sign In To Start Managing Your Projects.
                        </p>

                        <form onSubmit={handleSubmit}>
                              <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                          type="email"
                                          id="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          required
                                    />
                              </div>
                              <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                          type="password"
                                          id="password"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          required
                                    />
                              </div>
                              <button type="submit">Sign In</button>
                              <p>
                                    <a href="#">Forgot Password?</a>
                              </p>
                        </form>
                        <div className="social-login">
                              <p>Or</p>
                              <button>
                                    <img src="/images/login-google.svg" alt="google" /> Sign in with
                                    Google
                              </button>
                              <button>
                                    <img src="/images/login-facebook.svg" alt="facebook" /> Sign in with
                                    Facebook
                              </button>
                        </div>
                        <p>
                        Don&apos;t have an account? <a href="#">Sign Up</a>
                         </p>

                  </div>
                  <div className="image-container w-[47%] bg-red-500 h-screen overflow-hidden p-6">
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

export default LoginJoin;
