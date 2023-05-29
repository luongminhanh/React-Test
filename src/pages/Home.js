import React from 'react';
import "../assets/scss/Home.scss";
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <header className='header'>HIT BLOG</header>
        <Outlet/>
        <footer className='footer'>@hithaui 2023</footer>
    </div>
  )
}

export default Home