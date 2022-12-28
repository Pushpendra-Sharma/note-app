import logo from '../assets/logo.png';
import React from 'react';
import { useThemeContext } from '../context';

const Nav = () => {
  const { darkTheme, setDarkTheme } = useThemeContext();

  const handleTheme = () => {
    console.log('::: to update app theme');
    setDarkTheme(darkTheme => !darkTheme);
  };

  const handleSidebar = () => {
    console.log('::: to hide or show sidebar');
  };

  const handleNavigation = () => {
    console.log('::: navigtion');
  };

  return (
    <header className='flex items-center justify-between p-2 gap-4 border-b-2 shadow-black'>
      <div className='flex items-center justify-around pr-8 pl-4'>
        <span className='material-symbols-outlined px-2' onClick={handleSidebar}>
          menu
        </span>
        <img src={logo} alt='Logo' onClick={handleNavigation} className='px-2'/>
        <span className='px-2 text-xl' onClick={handleNavigation}>
          Keep
        </span>
      </div>
      <div className='flex items-center justify-around px-4'>
        <input
          type='search'
          placeholder='Search'
          className='rounded-sm px-4 py-2 border-solid border-2 border-black rounded focus:outline-offset-0'
        ></input>
        {/* <span className='material-symbols-outlined'>search</span> */}
      </div>
      <div className='flex items-center justify-around px-4'>
        {darkTheme ? (
          <span
            className='material-symbols-outlined cursor-pointer px-4'
            onClick={handleTheme}
          >
            light_mode
          </span>
        ) : (
          <span
            className='material-symbols-outlined cursor-pointer px-4'
            onClick={handleTheme}
          >
            dark_mode
          </span>
        )}
        <span className='material-symbols-outlined px-4'>apps</span>
      </div>
    </header>
  );
};

export default Nav;
