import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubjectList from './pages/SubjectList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="subjects" element={<SubjectList />} />
        <Route path="topics" element={<SubjectList />} />
        <Route path="*" element={<div className="p-4 text-center">Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
