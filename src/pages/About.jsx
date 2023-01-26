import styles from '././styles/about.module.css';

const About = () => {
  return (
    <div className={styles.main_about}>
      <div className={styles.about_wrapper}>

        <div className={styles.about_description}>
          <h1>Raidics</h1>
          <div className={styles.about_description_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />Etiam luctus eleifend nibh ac posuere.
            <br />Sed consequat dictum libero, in condimentum felis lobortis vitae. Vivamus commodo turpis suscipit, feugiat odio ac, ullamcorper diam. Sed quis quam in dui volutpat congue. Donec eleifend, tellus et pretium finibus, mauris lacus posuere lectus, nec venenatis erat erat vel mauris. In imperdiet, tellus sed porttitor dapibus, dolor mauris luctus lectus, hendrerit aliquet metus orci et libero. Phasellus quis felis sit amet lorem imperdiet lacinia vel ac enim. Nam varius augue vel tellus blandit, ut vehicula mauris fringilla.
          </div>
        </div>

        <div className={styles.about_address}>
          <div className={styles.about_address_description}>
            <div className={styles.about_address_description_row}>
              НАШИ
              <br />АДРЕСА:
              <br />
            </div>
            <div className={styles.about_address_description_column}>НАШИ АДРЕСА:</div>
          </div>

          <div className={styles.about_address_item}>г. Минск, ул. Инженерная д.4 {`(офис)`}</div>
          <div className={styles.about_address_item}>г. Минск, ул. Селицкого 113/2 {`(склад)`}</div>
        </div>

        <div className={styles.yandex_map}>
          <div className={styles.about_search}>
            <div className={styles.about_search_row}>
              КАК
              <br />НАС
              <br />НАЙТИ
              <br />?
            </div>
            <div className={styles.about_search_column}>КАК НАС НАЙТИ ?</div>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A463b39930642139ae58f9a550f6d7d0fa27e283437ca2379ada8a113b73e05f2&amp;source=constructor"
            width="500" height="600" frameborder="0">
          </iframe>
        </div>

      </div>
    </div>
  )
}

export default About