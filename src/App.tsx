import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Feed from './pages/Feed';
import SubjectList from './pages/SubjectList';
import SubjectDetail from './pages/SubjectDetail';
import FormalMaterial from './pages/FormalMaterial';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <ProgressProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="subjects" element={<SubjectList />} />
          <Route path="subjects/:subjectId" element={<SubjectDetail />} />
          <Route path="subjects/:subjectId/formal" element={<FormalMaterial />} />
          <Route path="*" element={<div className="k-not-found">Not Found</div>} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}

export default App;
