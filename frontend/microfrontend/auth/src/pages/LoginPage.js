import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import AuthHeader from '../components/AuthHeader';

function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials);
      navigate('/profile');
    } catch (err) {
      setError('Неверные учетные данные');
    }
  };

  return (
    <div className="auth-page">
      <AuthHeader title="Вход в систему" />
      {error && <div className="error-message">{error}</div>}
      <LoginForm onLogin={handleLogin} />
      <div className="auth-footer">
        Нет аккаунта? <a href="/register">Зарегистрируйтесь</a>
      </div>
    </div>
  );
}

export default LoginPage;
