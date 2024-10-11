import { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [displayPopup, setdisplayPopup] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentTheme") ?? "dark");

  useEffect(() => {
    document.body.classList.replace(theme === "dark" ? "light" : "dark", theme);
  }, [theme]);

  return (
    <header className='flex'>
      <button onClick={() => { setdisplayPopup(true) }} className='nav-menu icon-clear_all flex' />
      <div />
      <nav>
        <ul className='flex'>
          <li><a href="#">About</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Speaking</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button onClick={() => {
        localStorage.setItem("currentTheme", theme === "dark" ? "light" : "dark")
        setTheme(localStorage.getItem("currentTheme"));
      }} className="switch-mode flex">
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
      {displayPopup && (<div className="fixed">
        <ul className='popup'>
          <li><button className="icon-close" onClick={() => { setdisplayPopup(false) }} /></li>
          <li><a href="About">About</a></li>
          <li><a href="Articles">Articles</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Speaking">Speaking</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </div>)}
    </header>
  )
}

export default Header
