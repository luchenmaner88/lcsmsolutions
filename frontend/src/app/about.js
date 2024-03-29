
import styles from './about.module.css'


export default function AboutUs(){

    return (
        <div className={styles.container}>

            <div className={styles.container_info}>
                <h1>About Us</h1>
                <h5>
                As a Certified Service-Disabled Veteran-Owned Small
                Business (SDVOSB) LCSM Solutions Inc, is committed to
                excellence and creating innovative and flexible solutions
                for our Federal Government clients. LCSM is dedicated to
                DoD and Civilian Federal agencies to help attain and
                sustain cost-effective solutions to their construction and
                logistics needs. Let our experienced professionals deliver
                uninterrupted, high-quality services and support while
                keeping cost below budget.
                </h5>
            </div>

            <div className={styles.container_img}>
                <img src="about.img"></img>
                <img src="about1.img"></img>
            </div>

        </div>
    )
}