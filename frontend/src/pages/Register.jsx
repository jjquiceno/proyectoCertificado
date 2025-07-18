import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, Button } from "@radix-ui/themes";



const Register = () => {
  const navigate = useNavigate();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        console.log('Registro exitoso:', data);
        alert('Cuenta creada con éxito');
        navigate('/login');
      } else {
        alert(data.message);
        console.error('Error en el register:', data.message);
      }
    } catch (error) {
      console.error('Error de red o servidor:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f5f3ef] text-[#3f3f3f] px-4">

      <img src="/Logo.png" alt="" className='w-20 h-20 mt-[10vh]' />

      <h1 className="text-4xl text-[#696D59] font-semibold mb-2">Crear Cuenta</h1>
      <p className="text-[#6b4e37] mb-8 text-lg">
        Únete a la comunidad zen
      </p>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center'>
        <h1 className="text-2xl font-bold mb-2">
          Registro
        </h1>
        <p className="text-[#6b4e37] mb-8">
          Crea tu cuenta para comenzar
        </p>
        <form className='text-left' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Nombre</label>
            <TextField.Root type='text' required placeholder="Tu nombre" value={name}
              onChange={(e) => setName(e.target.value)}></TextField.Root>
          </div>

          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Email</label>
            <TextField.Root type='email' required placeholder="tu@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)}></TextField.Root>
          </div>

          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Contraseña</label>
            <TextField.Root type='password' required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></TextField.Root>
          </div>
          <Button type='submit' radius="large" color="brown" size="2" variant="soft" className='w-[20vw]'>
            Crear cuenta
          </Button>

        </form>
      </div>

    </div>
  );
};

export default Register;
