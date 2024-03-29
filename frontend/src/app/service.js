import styles from './service.module.css'
import ButtonContact from './btnContact'

export default function Service() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_info}>
                    <h1>Our Services</h1>
                </div>


                <div className={styles.container_info}>
                    <img src="construction.img"></img>
                    <h3>Construction Management</h3>
                    <ul >

                        <li>
                            Exceptional knowledge and experience developed over years of construction on a multitude of different types of buildouts
                        </li>
                        <li>
                            Committed to safe operations while delivering high quality construction
                        </li>
                        <li>
                            Experience working as a subcontractor or sole source contractor
                        </li>
                        <li>
                            Successfully completed contracts with Lockheed for $3 million, the VA for $3 million, and Sheppard AFB for $6.1 million
                        </li>
                    </ul>
                </div>

                <div className={styles.container_info}>
                    <img src="logistics.img"></img>
                    <h3>Logistics Solutions</h3>
                    <ul>

                        <li>
                            Experience moving a variety of different types of freight
                        </li>
                        <li>
                            Committed to safe operations while delivering high quality construction
                        </li>
                        <li>
                            Committed to safety, service and integrity
                        </li>
                        <li>
                            Successfully completed a contract for FedEx for $3.8 million
                        </li>
                    </ul>
                </div>

            </div>
            <div className={styles.btn_wrap}>
            <ButtonContact label=" Get In Touch"></ButtonContact>
            </div>
          
         
        </>
    )
}