import { Routes, Route } from 'react-router-dom'

import './App.styles.scss';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';



const Shop = () => {
  return <h1>I m the shop page</h1>
}

const App = () => {
  return (
    <div className="home-container">
      <Routes >
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
