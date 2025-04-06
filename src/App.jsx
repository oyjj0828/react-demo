import { Link, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import app from './App.module.css'
import Home from './components/Home';
import About from './components/About';
import MyNavLink from './components/MyNavLink';

function App() {
  return (
    <div className={app.App}>
      <div className={app.nav}>
        <MyNavLink to="/home">Home</MyNavLink>
        <MyNavLink to="/about">About</MyNavLink>
      </div>
      <Routes>
        <Route path='/home/*' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Navigate to="/home" replace/>}></Route>
      </Routes>
    </div>
  );
}

export default App;