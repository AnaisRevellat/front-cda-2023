import { Routes, Route } from 'react-router-dom'

import './App.styles.scss';

import Home from './routes/home/home.component';

const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Home />} />      
    </Routes>
  );
}

export default App;
