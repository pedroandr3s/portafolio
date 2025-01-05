import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router basename="/portafolio">
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;