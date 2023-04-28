import React from 'react';
import styles from './styles/error.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../images/logo3.png';


const ErrorPage = () => {
  return (
    <>
      <div className={styles.error_wrapper}>
        <div className={styles.error_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.error_404}>
          404
        </div>
        <div className={styles.error_exist}>
          К сожалению, такой страницы не существует!
        </div>
        <div className={styles.error_main_link}>
          <button>
            <NavLink to={'/main'}>Перейти на главную</NavLink>
          </button>
        </div>
      </div>
    </>

  )
}

export default ErrorPage;