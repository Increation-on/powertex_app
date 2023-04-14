import styles from './styles/mobileMain.module.css';
import { Link } from 'react-router-dom';

const MobileMain = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.animation_top}></div>
        <div className={styles.animation_left}>Сильная изоляция</div>
        <div className={styles.animation_right}>Для вашего дома</div>
        <Link className={styles.main_button_more} to={`/products`}>Подробнее</Link>
      </div>
    </main>
  )
}

export default MobileMain;