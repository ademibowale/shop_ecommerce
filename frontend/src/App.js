import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'; 
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
