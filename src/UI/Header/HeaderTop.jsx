import styles from './../styles/header.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Phones from './Phones';
import HeaderSearch from './HeaderSearch';
import RequestService from '../../api/RequestService';



const HeaderTopTest = () => {

    const [menu, setMenu] = useState();

    // useEffect(() => {
    //     axios.get('/mocks/headerNav.json').then(response => {
    //         const data = response.data;
    //         setMenu(data);
    //     }).catch(err => console.log(err));
    // }, []);

    useEffect(() => {
        const fetchMenu = async () => {
          const response = await RequestService.getNavbar();
          const data = response;
          setMenu(data);
        }
        fetchMenu();
      }, []);

    return (
        <header className={styles.header}>
            <div className={styles.header_items_container}>
                <div className={styles.header_top_items_container}>
                    <Logo />
                    <HeaderSearch/>
                    <div className={styles.header_phones_test}><Phones /></div>
                </div>

                <div className={styles.header_bottom_items_container}>
                    {/* <Phones /> */}
                    <ul className={styles.menu_container}>
                        {menu && menu.map(el => {
                            return (
                                <li key={el.id} className={styles.menu_item}>
                                    <NavLink className={({ isActive }) => isActive ? styles.menu_item_active : styles.menu_item} to={el.path}>{el.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default HeaderTopTest;