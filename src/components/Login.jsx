import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User logged in successfully');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('User logged in with Google');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('User logged in with GitHub');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-4 rounded-lg"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-4 rounded-lg"
      />

     <button onClick={handleLogin} className="text-blue-500 p-2 rounded-lg shadow-md hover:text-blue-700 transition duration-300 mb-4 flex items-center">
        Log In
      </button>

      <button onClick={handleGoogleLogin} className="text-red-500 p-2 rounded-lg shadow-md hover:text-red-700 transition duration-300 mb-4 flex items-center">
        
      <img src="/src/assets/google-logo.png" alt="Google Logo" className="w-6 h-6 mr-2" />
      Log In with Google

      </button>

      <button onClick={handleGithubLogin} className="text-gray-500 p-2 rounded-lg shadow-md hover:text-gray-700 transition duration-300 flex items-center">

      <img src="/src/assets/github-logo.png" alt="GitHub Logo" className="w-6 h-6 mr-2" />
       Log In with GitHub

      </button>
    </div>
  );
};

export default Login;