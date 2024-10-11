import React, { useState } from 'react';
import "./main.css";
import { AnimatePresence, motion, spring } from 'framer-motion';

const myProjects = [
  { pTitle: "Crafting a design system for a multiplanetary future", pCategory: ["react", "bootstrap"], pImg: "./img/D2.jpg" },
  { pTitle: "High performance web animations", pCategory: ["css"], pImg: "./img/D3.jpg" },
  { pTitle: "Rewriting the cosmOS kernel in Rust", pCategory: ["js"], pImg: "./img/D4.jpg" },
  { pTitle: "High performance web animations", pCategory: ["node"], pImg: "./img/D5.jpg" },
  { pTitle: "High performance web animations", pCategory: ["react"], pImg: "./img/D1.jpg" },
];

function Main() {
  const [currentActive, setCurrentActive] = useState('all');
  const [currentProject, setCurrentProject] = useState(myProjects);

  const filterProjects = (category) => {
    setCurrentActive(category);
    if (category === 'all') {
      setCurrentProject(myProjects);
    } else {
      const selectProject = myProjects.filter((project) => project.pCategory.includes(category));
      setCurrentProject(selectProject);
    }
  };

  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button onClick={() => filterProjects('all')} className={currentActive === 'all' ? 'active' : null}>All Projects</button>
        <button onClick={() => filterProjects('css')} className={currentActive === 'css' ? 'active' : null}>HTML & CSS</button>
        <button onClick={() => filterProjects('js')} className={currentActive === 'js' ? 'active' : null}>JavaScript</button>
        <button onClick={() => filterProjects('react')} className={currentActive === 'react' ? 'active' : null}>React & MUI</button>
        <button onClick={() => filterProjects('node')} className={currentActive === 'node' ? 'active' : null}>Node & Express</button>
        <button onClick={() => filterProjects('bootstrap')} className={currentActive === 'bootstrap' ? 'active' : null}>Bootstrap</button>
      </section>

      <section className='right-section flex'>
        <AnimatePresence>
          {currentProject.map((project) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 100 }}
              className='card'
              key={project.pImg}
            >
              <img width={260} src={project.pImg} alt="" />
              <div style={{ width: '260px' }} className="box">
                <h1 className='title'>{project.pTitle}</h1>
                <p className="sub-title">
                  Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.
                </p>
                <div className="all-icons flex">
                  <div style={{ gap: '11px' }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className='link flex' href="">
                    Read more
                    <span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
