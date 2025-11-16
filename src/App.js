import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './routes/login/login.component';
import Signup from './routes/signup/signup.component';
import Home from './routes/home/home.component';

function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>

  );
}

export default App;
