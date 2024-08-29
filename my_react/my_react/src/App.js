import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Procedures from './components/Procedures';
import Content from './components/Content';
import About from './components/About';
import './i18n';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Content/>} />
          <Route path="/procedures" element={<Procedures/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <Header/>
      <AnimatedRoutes />
      {/* Оставшиеся Content-компоненты можно убрать, если они не нужны */}
    </Router>
  );
}

export default App;
