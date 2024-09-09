import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
      setUsername(""); 
    } else {
      setUsername(value); 
    }
  };

  const handleRegister = () => {
    if (username === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <input 
       
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre de usuario"
      />
      <br /> <br />
      <button 
      style={{ backgroundColor: "orange", color: "white" }}
      onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
}

export default Login;
