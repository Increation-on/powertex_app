import { telephones } from '../../contstants';
import styles from './../styles/phones.module.css';

const Phones = () => {
    return (
        <div className={styles.telephone_wrapper}>
            <span className={styles.telephone_icon}></span>
            <div className={styles.telephone_numbers}>
                <div><a href={`tel:${telephones.tel1}`}>{telephones.tel1}</a></div>
                <div style={{ paddingTop: "2px", paddingBottom: "2px" }}><a href={`tel:${telephones.tel2}`}>{telephones.tel2}</a></div>
                <div><a href={`tel:${telephones.tel3}`}>{telephones.tel3}</a></div>
            </div>
        </div>
    )
}

export default Phones;