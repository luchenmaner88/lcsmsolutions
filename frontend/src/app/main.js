
import styles from './main.module.css'
import ButtonMore from './btnMore'

export default function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.container_info}>
                <h1>Innovative Solutions</h1>
                <h5>Offering innovative and flexible solutions
                to the construction and logistics needs</h5>
                <div className={styles.read_more}>
                          <ButtonMore label="Discover More"></ButtonMore> 
                </div>
         
            </div>
          
            <div className={styles.container_image}>
                  <img src="main.img"></img>
            </div>
          
        </div>
    )

}