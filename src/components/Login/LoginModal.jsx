import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.jpeg';
import './LoginModal.css';

const LoginModal = ({ onLoginSuccess, onClose }) => {
  // Add onClose prop
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [avatarFile, setAvatarFile] = useState(null); // State for avatar file

  useEffect(() => {
    // Reset form fields whenever isLogin state changes
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setAvatarFile(null);
  }, [isLogin]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      if (avatarFile) {
        formData.append('avatar', avatarFile);
      }

      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('avatar', data.avatar); // Store avatar in localStorage
        onLoginSuccess(); // Call the prop function to handle successful login
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration failed', err);
      alert('Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('avatar', data.avatar); // Store avatar in localStorage
        onLoginSuccess(); // Call the prop function to handle successful login
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
  };

  return (
    <div className="login-modal">
      <button className="close-button" id="close-button-id" onClick={onClose}>
        ×
      </button>
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <div className="create-account">
            <p onClick={() => setIsLogin(false)}>Create a new account</p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Register</button>
          <div className="create-account">
            <p onClick={() => setIsLogin(true)}>Back to login</p>
          </div>
        </form>
      )}
      <div className="">
        <img id="login-logo" src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default LoginModal;
