import styles from './partner.module.css'

export default function Partner() {
    return (
        <div className={styles.container}>
       
         
            <div className={styles.partner_name_detail}>
                <div>
                    <img src="work.img"></img>
                    <h4>Expertise in transforming challenges in opportunities</h4>
                    <h6>Dedicated to excellence, LCSM Solutions specializes in leveraging technology to enhance efficiency and effectiveness
                    </h6>
                </div>
                <div>
                    <img src="money.img"></img>
                    <h4>Streamlining your logistics operations with efficiency enhancing technology and planning</h4>
                    <h6>From planning to execution, our approach ensures that projects are completed on time, within budget, and above expectations
                    </h6>
                </div>
                <div>
                <img src="tech.img"></img>
                    <h4>Customized strategies to navigate the complexities encountered throughout a project</h4>
                    <h6>
                        Using technology and planning to ensure safe, productive and streamlined solution no matter how complex the project
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
