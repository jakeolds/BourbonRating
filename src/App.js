import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage.js';
import BourbonList from './components/BourbonList';
import BourbonDetails from './features/BourbonDetails';
import BourbonForm from './features/BourbonForm';
import BourbonCocktails from './pages/BourbonCocktails';  // Added this import

import './index.css';
import './styles.css'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app dark-theme">
          <Navbar />
          <Routes>
            {/* Point the root to the WelcomePage */}
            <Route path="/" element={<WelcomePage />} />  
            {/* New route for the bourbon collection */}
            <Route path="/my-collection" element={<BourbonList />} />  
            <Route path="/bourbons/:id" element={<BourbonDetails />} />
            <Route path="/add-bourbon" element={<BourbonForm />} />
            <Route path="/edit/:id" element={<BourbonForm />} />
            <Route path="/bourbon-cocktails" element={<BourbonCocktails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;