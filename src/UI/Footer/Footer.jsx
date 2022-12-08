import styles from './../styles/footer.module.css';
import footerBackground from '../../images/bg_header.jpg'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div classname={styles.menu_container}>
        <div className={styles.copyright}>
          All rights reserved {year} ©
        </div>
      </div>
    </footer>
  )
}

export default Footer;