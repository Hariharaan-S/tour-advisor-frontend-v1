import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './routes/login/login.component';

function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />}></Route>
    </Routes>

  );
}

export default App;
