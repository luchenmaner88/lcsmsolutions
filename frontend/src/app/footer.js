import styles from './footer.module.css'

export default function Footer(){
    let time = new Date();
    let year = time.getFullYear();
 
    return(
        <footer className={styles.footer}>
              Copyright © {year-2} - {year} LCSM®. All rights reserved.
        </footer>
    )
}

 