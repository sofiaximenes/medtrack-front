import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Dados de Registro:", { username, email, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>medtrack - cadastre-se</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome de usuário *"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="Endereço de e-mail *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha *"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />         
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme a senha *"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
        <div className="login-link">
          <p>
            Já tem uma conta? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
