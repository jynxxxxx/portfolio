import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainLayout from './pages/MainLayout';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </>
  );
}
