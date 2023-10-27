// import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import TitleH1 from "./components/TitleH1.js";
// import TitleH2 from "./components/TitleH2.js";
// import Counter from "./components/Counter.js";
// import List from "./components/List.js";
// import RickAndMorty from "./components/RickAndMorty.js";
import './App.css';

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return <div className="App">
    {/* <RickAndMorty />
    <TitleH1 name="everyone" age={35} />
    <TitleH2 state="How many points?" />
    <Counter name="Counter #1" />
    <Counter name="Counter #2" />
    <List /> */}
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </div>;
}

export default App;
