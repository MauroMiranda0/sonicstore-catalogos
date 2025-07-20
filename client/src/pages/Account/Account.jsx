// client/src/pages/Account/Account.jsx
import React, { useState } from 'react';
import './Account.css';

const LoginForm = ({ onSwitch }) => (
  <form className="auth-form">
    <h2>Iniciar Sesión</h2>
    <p>Bienvenido de nuevo. ¡Te hemos echado de menos!</p>
    <div className="form-group">
      <label htmlFor="login-email">Correo Electrónico</label>
      <input type="email" id="login-email" name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="login-password">Contraseña</label>
      <input type="password" id="login-password" name="password" required />
    </div>
    <button type="submit" className="auth-button">Ingresar</button>
    <p className="switch-form-text">
      ¿No tienes una cuenta?{' '}
      <button type="button" onClick={onSwitch} className="switch-form-button">
        Regístrate
      </button>
    </p>
  </form>
);

const RegisterForm = ({ onSwitch }) => (
  <form className="auth-form">
    <h2>Crear Cuenta</h2>
    <p>Únete a la comunidad de SonicStore y disfruta de beneficios exclusivos.</p>
    <div className="form-group">
      <label htmlFor="register-name">Nombre Completo</label>
      <input type="text" id="register-name" name="name" required />
    </div>
    <div className="form-group">
      <label htmlFor="register-email">Correo Electrónico</label>
      <input type="email" id="register-email" name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="register-password">Contraseña</label>
      <input type="password" id="register-password" name="password" required />
    </div>
    <button type="submit" className="auth-button">Crear Cuenta</button>
    <p className="switch-form-text">
      ¿Ya tienes una cuenta?{' '}
      <button type="button" onClick={onSwitch} className="switch-form-button">
        Inicia Sesión
      </button>
    </p>
  </form>
);


function Account() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <div className="account-page">
      <div className="auth-container">
        {isLogin ? <LoginForm onSwitch={handleSwitch} /> : <RegisterForm onSwitch={handleSwitch} />}
      </div>
    </div>
  );
}

export default Account;