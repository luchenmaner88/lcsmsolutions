import styles from './btnContact.module.css'

export default function ButtonContact({label}){
 

    return (
       <a href="#contact">
            <button className={styles.contact_button}>
                {label}
            </button>
        </a>
       
    )
}