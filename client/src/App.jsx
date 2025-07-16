// client/src/App.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // <-- CAMBIA ESTO
import './App.css';

function App() {
  return (
    <div>
      <Header /> {/* <-- Y ESTO */}

      <main className="container">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>© 2024 SonicStore. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;