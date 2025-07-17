import React from 'react';
import { TextField, Button } from "@radix-ui/themes";

const Login = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f5f3ef] text-[#3f3f3f] px-4">
      
      <img src="/Logo.png" alt="" className='w-20 h-20 mt-[15vh]'/>
      
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
        <form className='text-left'>
          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Email</label>
            <TextField.Root placeholder="tu@email.com"></TextField.Root>
          </div>

          <div className='mb-4'>
            <label className="mb-2 text-sm font-bold">Contraseña</label>
            <TextField.Root placeholder="••••••••"></TextField.Root>
          </div>
          <Button radius="large" color="brown" size="2" variant="soft" className='w-[20vw]'>
            Edit profile
          </Button>

        </form>
      </div>

    </div>
  );
};

export default Login;
