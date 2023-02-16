import styles from './styles/main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.animation_top}></div>
        <div className={styles.animation_left}>Сильная изоляция</div>
        <div className={styles.animation_right}>Профессиональное решение</div>
        <Link className={styles.main_button_more} to={`/products`}>Подробнее</Link>
      </div>
    </main>
  )
}

export default Main