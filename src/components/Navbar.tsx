import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}
export function Navbar({ onLoginClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ToogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        {/* Mobile Menu Button*/}
        <div className="grid items-center">
          <div className="md:hidden flex bg-brand-primary p-4">
            <div className="flex items-center uppercase font-bold bg-brand-secondary text-brand-white p-1 px-4 rounded-sm focus:ring-2 focus:ring-brand-white">
              <button
                onClick={ToogleMenu}
                aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
              >
                {isMenuOpen ? (
                  <X className="text-white" />
                ) : (
                  <Menu className="text-white" />
                )}
              </button>
              <span className="ml-2">Menu</span>
            </div>
          </div>

          {/* desktop */}
          <nav className="hidden md:block w-full mt-8 mb-8 bg-brand-primary">
            <ul className="flex gap-16 flex-wrap p-5 font-bold uppercase">
              <li>
                <a className="py-2" href="#">
                  Animais
                </a>
              </li>
              <li>
                <a className="py-2" href="#">
                  Faq
                </a>
              </li>
              <li>
                <a className="py-2" href="#">
                  Contato
                </a>
              </li>
              <li>
                <a onClick={onLoginClick} className="py-2" href="#">
                  Login →
                </a>
              </li>
            </ul>
          </nav>

          {/* mobile */}
          <div className="md:hidden">
            <nav
              className={`fixed top-30 left-0 bg-brand-primary w-40 z-50 shadow-md ${
                isMenuOpen ? 'block' : 'hidden'
              } origin-top-right transform transition-all duration-300`}
              style={{
                animation: isMenuOpen ? 'show-right 0.3s forwards' : 'none',
                padding: '20px 20px 20px 0',
              }}
            >
              <ul className="font-bold uppercase ml-4 flex flex-col space-y-4 py-4">
                <li>
                  <a className="py-2" href="#">
                    Animais
                  </a>
                </li>
                <li>
                  <a className="py-2" href="#">
                    Faq
                  </a>
                </li>
                <li>
                  <a className="py-2" href="#">
                    Contato
                  </a>
                </li>
                <li>
                  <a onClick={onLoginClick} className="py-2" href="#">
                    Login →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
