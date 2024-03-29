import styles from './btnMore.module.css'

export default function ButtonMore({label}){
    return (
        <a href="#contact">
             <button className={styles.more_button}>
            {label}
        </button>
        </a>
       
    )
}