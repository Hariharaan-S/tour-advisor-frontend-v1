import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './routes/login/login.component';
import Signup from './routes/signup/signup.component';
import Home from './routes/home/home.component';
import PlacesToVisit from './routes/places-to-visit/places-to-visit.component';
import MakePlan from './routes/make-plan/make-plan.component';
import TripItineraries from './routes/trip-itineraries/trip-itineraries.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path='/places-to-visit' element={<PlacesToVisit />}></Route>
        <Route path='/make-plan' element={<MakePlan />}></Route>
        <Route path='/trip-itineraries' element={<TripItineraries />}></Route>
      </Route>
    </Routes>

  );
}

export default App;
