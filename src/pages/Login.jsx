import React, { useState } from 'react';
import './login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { username: 'sabri', password: '123456789', name: 'Eyüb Sabri Demir' },
    { username: 'ali', password: '12345', name: 'Ali Veli' },
    // Diğer kullanıcılar
  ];

  const loginUser = () => {
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Başarıyla giriş yapıldı!');
      handleLogin(user);
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn-login' onClick={loginUser}>Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
