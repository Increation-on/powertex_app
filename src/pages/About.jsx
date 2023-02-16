import styles from '././styles/about.module.css';

const About = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }


  return (
    <div className={styles.main_about}>
      <div className={styles.about_wrapper}>

        <div className={styles.about_description}>
          <p>
            Брэнд Powertex был ос&shy;но&shy;ван в 2016 го&shy;ду и за это вре&shy;мя
            про&shy;де&shy;мон&shy;стри&shy;ро&shy;вал се&shy;бя, как ди&shy;на&shy;мич&shy;но раз&shy;ви&shy;ва&shy;ю&shy;щий&shy;&shy;ся.
            Ре&shy;а&shy;ли&shy;зу&shy;е&shy;мая на&shy;ми про&shy;дук&shy;ция вклю&shy;ча&shy;ет в се&shy;бя
            теп&shy;ло&shy;изо&shy;ля&shy;ци&shy;он&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы, гид&shy;ро&shy;изо&shy;ля&shy;ци&shy;он&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы,
            и па&shy;ро-гид&shy;ро&shy;изо&shy;ля&shy;ци&shy;он&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы для внут&shy;рен&shy;ней и на&shy;руж&shy;ной от&shy;дел&shy;ки.
            Мы стре&shy;мим&shy;ся предо&shy;ста&shy;вить на&shy;шим кли&shy;ен&shy;там наи&shy;луч&shy;шее ка&shy;че&shy;ство по разумной цене.
            На&shy;ши про&shy;дук&shy;ты про&shy;шли стро&shy;гие ис&shy;пыта&shy;ния и по&shy;лу&shy;чи&shy;ли сер&shy;ти&shy;фи&shy;ка&shy;ты ка&shy;че&shy;ства.
          </p>
          <p>
            Без&shy;услов&shy;ным пре&shy;иму&shy;ще&shy;ством мы счи&shy;та&shy;ем на&shy;ших со&shy;труд&shy;ни&shy;ков. На&shy;ши со&shy;труд&shy;ни&shy;ки —
            это вы&shy;со&shy;ко&shy;ква&shy;ли&shy;фи&shy;ци&shy;ро&shy;ван&shy;ные спе&shy;ци&shy;а&shy;ли&shy;сты, зна&shy;ю&shy;щие и лю&shy;бя&shy;щие свое де&shy;ло. Мы
            все&shy;гда ста&shy;ра&shy;ем&shy;ся от&shy;вет&shy;ствен&shy;но под&shy;хо&shy;дить  к сво&shy;е&shy;му тру&shy;ду.
          </p>
          <p>
            Мы ра&shy;ды вме&shy;сте с Ва&shy;ми рас&shy;смот&shy;реть и по&shy;ду&shy;мать над все&shy;ми
            по&shy;же&shy;ла&shy;ни&shy;я&shy;ми и ню&shy;ан&shy;са&shy;ми, про&shy;кон&shy;сульти&shy;ро&shy;вать, по&shy;со&shy;ве&shy;то&shy;вать,
            по&shy;мочь опре&shy;де&shy;лить&shy;ся с вы&shy;бо&shy;ром, для то&shy;го, что&shy;бы сде&shy;лав один раз, Вы как мож&shy;но доль&shy;ше
            не воз&shy;вра&shy;ща&shy;лись к этим во&shy;про&shy;сам.
            Глав&shy;ное для нас – это
            до&shy;ве&shy;рие и ува&shy;же&shy;ние к на&shy;шим кли&shy;ен&shy;там и по&shy;ку&shy;па&shy;те&shy;лям!
          </p>
        </div>

        <div className={styles.about_address}>
          <div className={styles.about_address_description}>
            <div className={styles.about_address_description_row}>
              НАШИ АДРЕСА:
            </div>
            <div className={styles.about_address_description_column}>НАШИ АДРЕСА:</div>
          </div>

          <div className={styles.about_address_item}>г. Минск, ул. Инженерная д.4 {`(офис)`}</div>
          <div className={styles.about_address_item}>г. Минск, ул. Селицкого 113/2 {`(склад)`}</div>
          <div className={styles.about_address_index}>Почтовый индекс - 220075</div>
          <div className={styles.about_address_requisites}>
            <b>Банковские реквизиты:</b>
            <br />
            <br />УНП: 193620401, р/c: BY 40 PJCB 3012 0717311000000 933 в Приорбанк ОАО
            <br />
            <br />БИК: PJCBBY2X
          </div>
        </div>

        <div className={styles.yandex_map}>
          <div className={styles.about_search}>
            <div className={styles.about_search_row}>
              КАК НАС НАЙТИ:
            </div>
            <div className={styles.about_search_column}>КАК НАС НАЙТИ ?</div>
          </div>
          <button onClick={() => { scrollTop() }} className={styles.about_scroll_top_button}>&#8593;</button>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A463b39930642139ae58f9a550f6d7d0fa27e283437ca2379ada8a113b73e05f2&amp;source=constructor"
            width="500" height="600"
            title='map'>
          </iframe>

        </div>

      </div>
    </div>
  )
}

export default About