// client/src/App.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // 1. Importa el componente
import './App.css';

function App() {
  return (
    <div>
      <Navbar /> {/* 2. Utiliza el componente aquí */}

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