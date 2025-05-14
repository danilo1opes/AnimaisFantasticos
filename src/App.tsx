import { Layout } from './Layout.js';
import { Navbar } from './components/Navbar.js';
function App() {
  return (
    <>
      <Layout>
        <main className="col-start-3 col-end-5">
          <Navbar />
        </main>
      </Layout>
    </>
  );
}

export default App;
