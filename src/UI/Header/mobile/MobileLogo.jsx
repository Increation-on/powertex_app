import styles from './styles/mobileLogo.module.css';
import logo from './../../../images/logo3.png';
import { useLocation, NavLink } from 'react-router-dom';


const MobileLogo = () => {

    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={styles.logo_wrapper}>
            <NavLink to="/main" className={path === '/main' || path === '/' ? styles.logo_disabled : styles.logo}>
                <img src={logo} alt="logo" />
            </NavLink>
        </div>
    )
}

export default MobileLogo;