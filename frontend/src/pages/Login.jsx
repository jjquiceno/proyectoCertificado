import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, Button } from "@radix-ui/themes";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await respuesta.json();

      if (respuesta.ok) {

        localStorage.setItem('userName', data.name);
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userId', data.id);

        console.log('Inicio de sesion exitoso:', data);
        navigate('/tasks');
      } else {
        alert(data.message);
        console.error('Error en el login:', data.message);
      }
    } catch (error) {
      console.error('Error de red o servidor:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f5f3ef] text-[#3f3f3f] px-4">

      <img src="/Logo.png" alt="" className='w-20 h-20 mt-[15vh]' />

      <h1 className="text-4xl text-[#696D59] font-semibold mb-2">Iniciar sesión</h1>
      <p className="text-[#6b4e37] mb-8 text-lg">
        Accede a tu espacio Zen
      </p>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center'>
        <h1 className="text-2xl font-bold mb-2">
          Bienvenido
        </h1>
        <p className="text-[#504033] mb-8">
          Ingresa tus credenciales para continuar.
        </p>
        <form className='text-left' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Email</label>
            <TextField.Root type='email' required placeholder="tu@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)} ></TextField.Root>
          </div>

          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Contraseña</label>
            <TextField.Root type='password' required placeholder="••••••••" value={password}
              onChange={(e) => setPassword(e.target.value)}></TextField.Root>
          </div>
          <Button type='submit' radius="large" color="brown" size="2" variant="soft" className='w-[20vw]'>
            Iniciar sesión
          </Button>

        </form>
      </div>

    </div>
  );
};

export default Login;
