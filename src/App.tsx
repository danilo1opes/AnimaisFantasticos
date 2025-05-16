import { useState } from 'react';
import { Layout } from './Layout.js';
import { Navbar } from './Components/Navbar.js';
import { Modal } from './Components/Modal.js';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Layout>
        <main className="col-start-3 col-end-5">
          <Navbar onLoginClick={() => setIsModalOpen(true)} />
        </main>
        {/* Modal de Login */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Layout>
    </>
  );
}

export default App;
