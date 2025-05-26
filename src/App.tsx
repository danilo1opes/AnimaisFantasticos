import { useState } from 'react';
import { Layout } from './Layout.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Modal } from './components/Modal.tsx';
import { Introduction } from './components/Introduction.tsx';
import { Faq } from './components/Faq.tsx';
import { Numbers } from './components/Numbers.tsx';
import { Contato } from './components/Contato.tsx';
import { Footer } from './components/Footer.tsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Layout>
        <main className="col-start-3 col-end-5">
          <Navbar onLoginClick={() => setIsModalOpen(true)} />
        </main>
        <div className="md:col-start-2 md:col-end-5 box-border">
          <Introduction />
          <Numbers />
          <Faq />
          <Contato />
        </div>
        <footer className="col-start-3 col-end-5">
          <Footer />
        </footer>
        {/* Modal de Login */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Layout>
    </>
  );
}

export default App;
