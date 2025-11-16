import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './routes/login/login.component';
import Signup from './routes/signup/signup.component';
import Home from './routes/home/home.component';
import PlacesToVisit from './routes/places-to-visit/places-to-visit.component';
import MakePlan from './routes/make-plan/make-plan.component';

function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/places-to-visit' element={<PlacesToVisit />}></Route>
      <Route path='/make-plan' element={<MakePlan />}></Route>
    </Routes>

  );
}

export default App;
