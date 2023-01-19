import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

export const ThemeSwitcher = () => {

  const [theme, setTheme] = useState('dark');

  //Para que concuerde con el operative system del user.
  useEffect(() => {
    if (window.matchMedia('prefer-color-scheme: dark').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, []);

  //Con este cambiamos la class del documento completo.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  //Manejamos el click que haga el user.
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  //Cuando el user haga click, se cambiará tanto el logo como la class.
  return (
    <p
      onClick={handleThemeSwitch}
      className='dark:text-gray-300'>
      {theme === 'dark' ? <FaMoon size={30} /> : <BsSunFill size={30} />}
    </p>
  );
};
