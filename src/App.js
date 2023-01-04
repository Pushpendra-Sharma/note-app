import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav, SideBar } from './components';
import { Archieve, Home, Labels, Trash } from './pages';
import { useThemeContext } from './context';

function App() {
  const { darkTheme } = useThemeContext();

  return (
    <div className={darkTheme ? 'darkMode' : 'lightMode'}>
      <Nav />
      <div className='flex pt-4'>
        <SideBar />
        <div className='flex flex-col flex-wrap items-center gap-4 p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/trash' element={<Trash />} />
            <Route path='/labels' element={<Labels />} />
            <Route path='/archieve' element={<Archieve />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
