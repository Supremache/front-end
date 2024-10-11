import Hero from './components/hero/Hero'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'


function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setdisplayScroll(window.scrollY > 300 ? true : false);
    });
  }, []);

  const [displayScroll, setdisplayScroll] = useState(false);

  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />

      {displayScroll && (<a href='#up'>
        <button className='icon-arrow_drop_up scroll'></button>
      </a >
      )}
    </div>
  )
}

export default App
