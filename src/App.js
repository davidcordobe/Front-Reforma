import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './pages/error';
import Home from './pages/home';
import Productos from './pages/productos';
import Servicios from './pages/servicios';
import Formulario from './pages/formulario';
import NavbarActivo from './components/navbar';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
require('./App.css');


function App() {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // Simular una carga inicial
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);


    return (
        <div className='app'>
            {isLoading && (
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div>
            )}
            {(
                <Router>
                    <NavbarActivo />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/formulario" element={<Formulario />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </Router>
            )}
        </div>
    );
}

export default App;




