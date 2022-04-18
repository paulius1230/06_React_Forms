import StudentForm from './components/StudentForm'
import UpdateStudent from './components/UpdateStudent'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentForm />} />
      <Route path="/update/:id" element={<UpdateStudent />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;