import { useState } from 'react';
import { Layout } from './Layout.js';
import { Navbar } from './Components/Navbar.js';
import { Modal } from './Components/Modal.js';
import { Introduction } from './Components/Introduction.js';
import { Faq } from './Components/Faq.js';
import { Numbers } from './Components/Numbers.js';

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
        </div>
        {/* Modal de Login */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Layout>
    </>
  );
}

export default App;
