import styles from './../styles/footer.module.css';
import { telephones } from '../../contstants';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.menu_container}>

        <div className={styles.footer_company_information}>
          <div className={styles.footer_company_information_address}>
            220075, Республика Беларусь, г. Минск ул. Инженерная д.4
          </div>
          <div className={styles.footer_company_information_email} >
            <a href="mailto:info@raidics.by">E-mail: info@raidics.by</a>
          </div>
        </div>

        <div className={styles.footer_worktime}>
          <h1>Режим работы:</h1>
          <div>ПН-ПТ: с 9:00 до 17:00</div>
        </div>

        <div className={styles.footer_phones}>
          <span className={styles.footer_phones_icon}></span>
          <div className={styles.footer_phones_numbers}>
            <div><a href={`tel:${telephones.tel1}`}>{telephones.tel1}</a></div>
            <div><a href={`tel:${telephones.tel2}`}>{telephones.tel2}</a></div>
          </div>
        </div>

      </div>

      <div className={styles.copyright}>
        All rights reserved 2022 - {year} ©
      </div>

    </footer>
  )
}

export default Footer;