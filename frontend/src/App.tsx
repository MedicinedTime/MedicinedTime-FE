import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import usePageStore from './stores/pageStore';

const App: React.FC = () => {
  const currentPage = usePageStore((state) => state.currentPage);

  return (
    <Router>
      <Routes>
        {/* Zustand 상태를 기반으로 기본 경로 리다이렉션 */}
        <Route path="/" element={<Navigate to={currentPage} />} />
      </Routes>
    </Router>
  );
};

export default App;