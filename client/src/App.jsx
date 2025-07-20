// client/src/App.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // 1. Importa el nuevo componente
import './App.css';

function App() {
  return (
    <div className="app-wrapper"> {/* Añadimos un wrapper para el sticky footer */}
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer /> {/* 2. Reemplaza el footer antiguo */}
    </div>
  );
}

export default App;