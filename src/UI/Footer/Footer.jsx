import styles from './../styles/footer.module.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.menu_container}>
        <div className={styles.copyright}>
          All rights reserved {year} ©
        </div>
      </div>
    </footer>
  )
}

export default Footer;