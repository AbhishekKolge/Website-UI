import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ContactForm from './components/ContactForm/ContactForm';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactform' element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default App;
