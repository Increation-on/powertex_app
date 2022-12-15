import styles from '././styles/about.module.css';

const About = () => {
  return (
    <div className={styles.main_about}>
      <div className={styles.about_wrapper}>
        <div className={styles.description}>
          <h1>Raidics</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />Etiam luctus eleifend nibh ac posuere.
          <br />Sed consequat dictum libero, in condimentum felis lobortis vitae. Vivamus commodo turpis suscipit, feugiat odio ac, ullamcorper diam. Sed quis quam in dui volutpat congue. Donec eleifend, tellus et pretium finibus, mauris lacus posuere lectus, nec venenatis erat erat vel mauris. In imperdiet, tellus sed porttitor dapibus, dolor mauris luctus lectus, hendrerit aliquet metus orci et libero. Phasellus quis felis sit amet lorem imperdiet lacinia vel ac enim. Nam varius augue vel tellus blandit, ut vehicula mauris fringilla.
        </div>
        <div className={styles.search}>
          <div className={styles.search_description}>
            КАК
            <br />НАС
            <br />НАЙТИ
            <br />?
            
          </div>
        </div>
        <div className={styles.yandex_map}>
          <div className={styles.address}>
            НАШ
            <br />АДРЕС:
            <br />➔
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abafd9f5bde0de8846135c6d7f17ae55258cd75695b835d49e392abf286b826eb&amp;source=constructor"
            width="500" height="600" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default About