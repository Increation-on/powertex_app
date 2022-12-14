import styles from './styles/main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.description}>Powertex</div>
        <div className={styles.description_one}>Сильная изоляция</div>
        <div className={styles.description_two}>Для вашей кровли</div>
      </div>      
    </main>
  )
}

export default Main