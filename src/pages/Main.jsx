import styles from './styles/main.module.css';
import roof from './../images/roofExpNobg2.png'

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_wraapper}>
        <div className={styles.description}>Powertex</div>
        <div className={styles.description_one}>Сильная изоляция</div>
        <div className={styles.description_two}>Для вашей кровли</div>
        <img className={styles.main_background} src={roof} alt="roof" />
      </div>
      {/* <div className={styles.test}>AASDA</div> */}
    </main>
  )
}

export default Main