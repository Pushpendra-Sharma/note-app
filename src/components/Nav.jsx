import logo from '../assets/logo.png';
import React from 'react';

const Nav = () => {
  let theme = 'light';

  const handleTheme = () => {
    console.log('::: to update app theme');
  };

  const handleSidebar = () => {
    console.log('::: to hide or show sidebar');
  };

  const handleNavigation = () => {
    console.log('::: navigtion');
  };

  return (
    <nav className='flex items-center justify-center p-4 gap-4 border-b-2 shadow-black'>
      <span className='material-symbols-outlined' onClick={handleSidebar}>
        menu
      </span>
      <img src={logo} alt='Logo' onClick={handleNavigation} />
      <span className='text-2xl' onClick={handleNavigation}>
        Keep
      </span>
      <input
        type='search'
        placeholder='Search'
        className='rounded-sm px-4 py-2 border-solid border-2 border-black focus:outline-offset-0'
      ></input>
      {theme ? (
        <span className='material-symbols-outlined' onClick={handleTheme}>
          light_mode
        </span>
      ) : (
        <span className='material-symbols-outlined' onClick={handleTheme}>
          dark_mode
        </span>
      )}
    </nav>
  );
};

export default Nav;
