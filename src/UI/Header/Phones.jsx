import { telephones } from '../../contstants';
import styles from './../styles/phones.module.css';

const Phones = () => {
    return (
        <div className={styles.telephone_wrapper}>
            <span className={styles.telephone_icon}></span>
            <div className={styles.telephone_numbers}>
                <div>{telephones.tel1}</div>
                <div>{telephones.tel2}</div>
            </div>
        </div>
    )
}

export default Phones;