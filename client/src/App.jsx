// client/src/App.jsx
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      {/* Aquí irá nuestra barra de navegación en el futuro */}
      <header>
        <h1>SonicStore Catálogos</h1>
        <p>Aquí irá la navegación</p>
      </header>

      <main>
        {/* El Outlet es donde React Router renderizará la página actual */}
        <Outlet />
      </main>
      
      {/* Aquí irá nuestro pie de página en el futuro */}
      <footer>
        <p>© 2024 SonicStore. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;