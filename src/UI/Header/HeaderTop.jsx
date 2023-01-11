import styles from './../styles/header.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Phones from './Phones';


const HeaderTop = () => {

    const [menu, setMenu] = useState();

    useEffect(() => {
        axios.get('/mocks/headerNav.json').then(response => {
            const data = response.data;
            setMenu(data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <header className={styles.header}>
            <Logo />
            <Phones />
            <ul className={styles.menu_container}>
                {menu && menu.map(el => {
                    return (
                        <li key={el.id} className={styles.menu_item}>
                            <NavLink className={({ isActive }) => isActive ? styles.menu_item_active : styles.menu_item} to={el.path}>{el.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default HeaderTop;