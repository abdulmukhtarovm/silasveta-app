import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './components/ScrollToTop';
import './sass/main.scss';
import App from './App';
import Navbar from './components/Navbar';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
<HashRouter>
<Navbar />
<ScrollToTop/>
 <Routes>
   <Route path="/" element={<App />} />
   <Route path="/about" element={<AboutPage />} />
   <Route path="/contacts" element={<ContactsPage />} />

 </Routes>
<Footer/>
</HashRouter>
</React.StrictMode>
);