import styles from '././styles/about.module.css';

const About = () => {
  return (
    <div className={styles.main_about}>
      <div className={styles.about_wrapper}>

        <div className={styles.about_description}>
          {/* <h1>Raidics</h1> */}
          <div className={styles.about_description_text}>
            <b>Раидикс или Повертекс????</b> - молодая, быстроразвивающаяся
            компания, основанная в 2022 году
            с целью предоставления высококачественных
            гидро-пароизоляционных материалов для внутренней
            и наружной отделки. Наша продукция включает в себя
            теплоизоляционные материалы, гидроизоляционные материалы,
            и паро-гидроизоляционные материалы.
            Мы стремимся предоставить нашим клиентам наилучшее качество продукции и услуг, а также
            предлагаем конкурентные цены. Наши продукты прошли строгие испытания и получили сертификаты
            качества. Наши клиенты приобретают наши продукты и услуги для достижения лучших результатов и
            отличной энергоэффективности. Наши клиенты дают
            нам положительные отзывы о нашей продукции и услугах.
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