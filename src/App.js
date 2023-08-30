import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import BourbonList from './components/BourbonList';
import BourbonDetails from './features/BourbonDetails';
import BourbonForm from './features/BourbonForm';

import './index.css';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app dark-theme">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bourbons" element={<BourbonList />} />
            <Route path="/bourbons/:id" element={<BourbonDetails />} />
            <Route path="/add-bourbon" element={<BourbonForm />} />
            <Route path="/edit/:id" element={<BourbonForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;