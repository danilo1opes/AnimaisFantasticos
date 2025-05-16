import { X } from 'lucide-react';
import { Input } from './Input';
import { useForm } from '../Hooks/useForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function Modal({ isOpen, onClose }: ModalProps) {
  const email = useForm('email');
  const senha = useForm('senha');

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-brand-secondary bg-opacity-50 z-50">
        <div className="bg-brand-white p-6 rounded-lg shadow-lg relative min-w-[300px]">
          <button
            className="absolute top-[-10px] right-[-10px] bg-brand-redSix text-brand-white rounded-full flex items-center justify-center font-bold shadow-md"
            onClick={onClose}
          >
            <X />
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

          <form className="flex flex-col space-y-4">
            <div>
              <Input
                type="email"
                value={email.value}
                id="email"
                name="email"
                placeholder="Email"
                onChange={email.onChange}
                onBlur={email.onBlur}
                className="border p-2 rounded-lg w-full"
              />
              {email.error && (
                <p className="text-red-500 text-sm mt-1">{email.error}</p>
              )}
            </div>
            <div>
              <Input
                type="password"
                value={senha.value}
                id="senha"
                name="senha"
                placeholder="Digite sua senha..."
                onChange={senha.onChange}
                onBlur={senha.onBlur}
                className="border p-2 rounded-lg w-full"
              />
              {senha.error && (
                <p className="text-red-500 text-sm mt-1">{senha.error}</p>
              )}
            </div>
            <button className="bg-brand-redSix p-2 rounded-lg text-brand-white">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
