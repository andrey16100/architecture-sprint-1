import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import AuthHeader from '../components/AuthHeader';
import { registerUser } from '../services/api';

function RegisterPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      await registerUser(userData);
      navigate('/login');
    } catch (err) {
      setError('Ошибка регистрации');
    }
  };

  return (
    <div className="auth-page">
      <AuthHeader title="Регистрация" />
      {error && <div className="error-message">{error}</div>}
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default RegisterPage;
