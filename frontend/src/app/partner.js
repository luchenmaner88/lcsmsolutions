import styles from './partner.module.css'

export default function Partner() {
    return (
        <div className={styles.container}>
       
         
            <div className={styles.partner_name_detail}>
                <div>
                    <img src="work.img"></img>
                    <h4>Expertise in transforming challenges into bridging industries</h4>
                    <h6>Dedicated to excellence, lcsm Solution LLC specializes in leveraging technology to enhance
                        efficiency and effectiveness in the construction
                    </h6>
                </div>
                <div>
                    <img src="money.img"></img>
                    <h4>Streamlining your logistics operations with advanced revolutionizing construction</h4>
                    <h6>From planning to execution, our approach ensures that projects are completed on time,
                        within budget, and above expectations
                    </h6>
                </div>
                <div>
                <img src="tech.img"></img>
                    <h4>Customized strategies to navigate the complexities innovating at every step</h4>
                    <h6>
                        leveraging cutting-edge technology and insights to redefine project management, enhancing productivity
                        while ensuring the utmost safty standards
                    </h6>
                </div>
            </div>
            <ul className={styles.partner_name}>
            <li><img src="partner1.img"></img></li>
              
              <li><img src="partner5.img"></img></li>
              <li><img src="partner6.img"></img></li>
               <li><img src="partner2.img"></img></li>
                <li><img src="partner3.img"></img></li>
                <li><img src="partner4.img"></img></li>
            </ul>
        </div>


    )
}