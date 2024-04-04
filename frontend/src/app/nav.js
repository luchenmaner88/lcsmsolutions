

'use client'

import styles from './nav.module.css'
import Link from 'next/link'
 
export default function Nav(){

  if(typeof window!=="undefined"){
    const navLinksEls = document.querySelectorAll('.nav');
    const sectionEls = document.querySelectorAll('section')
    let currentSection = "home";

    window.addEventListener('scroll', () => {
      sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop-100) {
          currentSection = sectionEl.id;
        }
      });

      navLinksEls.forEach(navLinksEl => {
        if (navLinksEl.href.includes(currentSection)) {
          document.querySelector('.active').classList.remove('active');
          navLinksEl.classList.add('active');
        }
      })
    });

  }

    return (
      <nav className={styles.nav_bar}>

          <h3>LCSM Solutions</h3>
        
          <div className={styles.nav_wrap}>
        
            <a className='nav active' href="#home">Home</a>
            <a className='nav' href="#about" >About</a>
            <a className='nav' href="#service" > Services</a>
            <a className='nav' href="#contact" >Contact</a>
    
        </div>
      

      </nav>
    )
}
