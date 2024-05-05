import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); // Estado para manejar errores

  const { login } = useContext(AuthContext);

  const Navegar = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    if (email === 'admin@admin.com' && password === 'admin') {
      login(email, password);
      // Guardar el estado de login en el localStorage
      localStorage.setItem('isLoggedIn', true);
      Navegar('/',{replace:true});
    } else {
      // Mostrar error si las credenciales son incorrectas
      setError(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
        {error && <p>Correo electrónico o contraseña incorrectos</p>}
      </form>
    </div>
  );
};

export default Login;
