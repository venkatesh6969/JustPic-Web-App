import React, { useState } from 'react';
import './side.css';
import DarkMode from './DarkMode/DarkMode';
import Footer from './Footer';
import Header from './Header';

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
 
  return (
    <div>
      <nav className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img
                src="data:image/jpeg;base64,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"
                alt="Logo"
              />
            </span>
            <div className="text logo-text">
              <span className="name">JustPic</span>
            </div>
          </div>
          
          <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          
        </header>
        <div className="menu-bar">
          <div className="menu">
          <svg onClick={() => setSidebarOpen(false)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <li className="search-box" >
              <i className='bx bx-search icon'></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  <span className="text nav-text">Cart</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                  <span className="text nav-text">Account</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                  <span className="text nav-text">Settings</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
                  <span className="text nav-text">Liked Products</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">

            <li className="">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <DarkMode/>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
      <Header/>
      <Footer/>
        
      </section>
    </div>
  );
}

export default Sidebar;
