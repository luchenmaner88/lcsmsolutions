
import Nav from "./nav";
import Main from "./main"
import Partner from "./partner";
import AboutUs from "./about";
import Service from "./service";
import WhyUs from "./whyus";
import Statement from "./statement";
import Contact from "./contact";
import Footer from "./footer";

import styles from "./page.module.css"



export default function Home() {
  return (
    <>

    <div className={styles.nav}>
       <Nav></Nav>
    </div>
      
      <div className={styles.main_container}>
         <section id="home">
        <Main></Main>
         <Partner></Partner> 
      </section>  
      <section id="about">
        <AboutUs></AboutUs>
      </section>
      <section id="service">
        <Service></Service>  
        <WhyUs></WhyUs>
        </section>
        <section id="contact">
       
        <Contact></Contact>
        <Statement></Statement>
      </section>

    
      <Footer></Footer>
     </div>
   
    </>
 
  );
}
