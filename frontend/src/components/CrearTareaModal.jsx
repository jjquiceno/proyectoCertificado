import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useTasksStore } from '../store/useTasksStore';
import { v4 as uuidv4 } from 'uuid';

export function CrearTareaModal({ colKey }) {
  const { addTask } = useTasksStore();

  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [prioridad, setPrioridad] = useState('Media');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      titulo,
      texto,
      prioridad,
      icono: null,
      fecha,
    };

    addTask(colKey, nuevaTarea);
    setOpen(false);
    setTitulo('');
    setTexto('');
    setPrioridad('Media');
    setFecha('');
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <span className="h-fit text-[#a67c52] font-bold text-3xl cursor-pointer hover:text-[#916640] transition duration-300">
          +
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 z-50">
          <Dialog.Title className="text-xl font-bold text-[#3f3f3f] mb-4">Crear nueva tarea</Dialog.Title>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="border p-2 rounded-md outline-none"
              required
            />
            <textarea
              placeholder="Descripción"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="border p-2 rounded-md outline-none"
              required
            />
            <select
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
              className="border p-2 rounded-md outline-none"
            >
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="border p-2 rounded-md outline-none"
            />
            <div className="flex justify-end gap-2">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-[#a67c52] text-white hover:bg-[#916640] transition"
              >
                Crear
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}