import styles from './../styles/breadcrumbs.module.css';
import { routes } from './../../router/routes';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {

    const location = useLocation();


    const breadcrumbs = useBreadcrumbs(routes);

    return location.pathname === "/main" || location.pathname === "/" ? null
        : <ul className={styles.breadcrumbs}>
            {breadcrumbs.map(({ match, breadcrumb }, index) => {
                return (
                    <li key={match.pathname} className={index === breadcrumbs.length - 1 ? styles.breadcrumb_last : styles.breadcrumb}>
                        <Link to={match.pathname}
                            className={index === breadcrumbs.length - 1 ? styles.breadcrumb_last : styles.breadcrumb}>
                            {breadcrumb}
                        </Link>
                    </li>
                )
            })}
        </ul>
}

export default Breadcrumbs;