import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import usePageStore from './stores/pageStore';
import LandingPage from './pages/Landing';
import InputNamePage from './pages/InputName';
import InputAgePage from './pages/InputAge';
import InputGenderPage from './pages/InputGender';

const App: React.FC = () => {
  const currentPage = usePageStore((state) => state.currentPage);

  return (
    <Router>
      <Routes>
        {/* Zustand 상태를 기반으로 기본 경로 리다이렉션 */}
        <Route path="/" element={<Navigate to={currentPage} />} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/info/input/name" element={<InputNamePage/>} />
        <Route path="/info/input/age" element={<InputAgePage/>} />
        <Route path="/info/input/gender" element={<InputGenderPage/>} />
      </Routes>
    </Router>
  );
};

export default App;