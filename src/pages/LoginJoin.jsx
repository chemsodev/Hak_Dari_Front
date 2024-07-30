'use client';     
import {useState} from 'react';

function LoginJoin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>WELCOME BACK 👋</h2>
        <p>
          Today Is A New Day. It's Your Day. You Shape It.
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
            <img src="/images/login-google.svg" alt="google" /> Sign in with Google
          </button>
          <button>
            <img src="/images/login-facebook.svg" alt="facebook" /> Sign in with Facebook
          </button>
        </div>
        <p>
          Don't You Have An Account? <a href="#">Sign Up</a>
        </p>
      </div>
      <div className="image-container">
        <img
          src="/images/login.png"
          alt="Cityscape"
        />
      </div>
    </div>
  );
}

export default LoginJoin;

