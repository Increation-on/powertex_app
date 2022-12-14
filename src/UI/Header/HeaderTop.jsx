import styles from './../styles/header.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo';

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
            <Logo/>
            <ul className={styles.menu_container}>
                {menu && menu.map(el => {
                    return (
                        <li key={el.id} className={styles.menu_item}><NavLink to={el.path}>{el.title}</NavLink></li>
                    )
                })}
            </ul>
        </header>
    )
}

export default HeaderTop;