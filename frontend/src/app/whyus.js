
import styles from './whyus.module.css'


export default function WhyUs(){
    return(
        <div className={styles.container}>
            <div className={styles.container_info}>
                <h1>Why Choose Us</h1>
                <h5>With A relentless commitment to excellence, we harness the
                    lastest in techonology and innovation to deliver solutions that
                    not only meet but exceed the expectations of our clients in the
                    construction and logistics industries
                </h5>
            </div>
            <div className={styles.container_info}>
                <h2>What sets us apart from the competition</h2>
                <ul>
                    <li>Our People</li>
                    <li>Performance-Based Process</li>
                    <li>Relationship Management</li>
                    <li>Strategic Mix of Technology and Business</li>
                </ul>

            </div>
         
            <div className={styles.container_info}>
            <h2>Federal and State Certifications</h2>
                <ul>
                    <li>SDVOSB Certified </li>
                    <li>OSHA 10- & 30-Hour Certifications
                    </li>
                    <li>Army Corps of Engineers CQM Certification</li>
                    <li>Certified as a Small Business</li>
                </ul>   
               
        </div>
        </div>
    )
}