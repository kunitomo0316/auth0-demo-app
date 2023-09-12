import { Route, Routes } from 'react-router-dom';
import Top from './Pages/Top';
import Profile from './Pages/Profile';
import ProtectedRoute from './Auth/ProtectedRoute';
import Contents1 from './Pages/Contents1';
import Contents2 from './Pages/Contents2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Top' element={<Top />} />
        <Route path='/Contents1' element={<Contents1 />} />
        <Route path='/Contents2' element={<Contents2 />} />
        <Route path='/profile' element={<ProtectedRoute component={Profile} />} />
        {/* <Route path='*' element={<Navigate to='/Top' />} /> */}
      </Routes>
    </>
  );
}

export default App;
