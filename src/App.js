
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllStudents from './pages/AllStudents';
import Navigation from './components/Navigation';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <BrowserRouter>
      <Navigation />    
      <Routes>
        <Route path='/' element={<AllStudents />} />
        <Route path='/addStudent' element={<AddStudent />} />
        <Route path='/updateStudent/:id' element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
