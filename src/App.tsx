import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}
