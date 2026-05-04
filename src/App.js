import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import i18n from "./i18n";
import Login from "./routes/login/login.component";
import Signup from "./routes/signup/signup.component";
import Home from "./routes/home/home.component";
import PlacesToVisit from "./routes/places-to-visit/places-to-visit.component";
import MakePlan from "./routes/make-plan/make-plan.component";
import TripItineraries from "./routes/trip-itineraries/trip-itineraries.component";
import Navbar from "./components/navbar/navbar.component";
import ViewPlans from "./routes/view-plans/view-plans.component";
import AboutUs from "./routes/about-us/about-us.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import { setCurrentUser } from "./store/user/user.actions";
import { selectLanguage } from "./store/language/language.selector";

function App() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      try {
        dispatch(setCurrentUser(JSON.parse(savedUser)));
      } catch (error) {
        dispatch(setCurrentUser(null));
        return <Navigate to="/login" replace />;
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const targetLanguage = language === "Tamil" ? "ta" : "en";
    i18n.changeLanguage(targetLanguage);
  }, [language]);

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route
        path="/"
        element={
          
            <Navbar />
          
        }
      >
        <Route index element={<Home />}></Route>
        <Route path="places-to-visit" element={<PlacesToVisit />}></Route>
        <Route path="make-plan" element={<MakePlan />}></Route>
        <Route
          path="trip-itineraries/:planId"
          element={<TripItineraries />}
        ></Route>
        <Route path="view-plans" element={<ViewPlans />}></Route>
        <Route path="about" element={<AboutUs />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
