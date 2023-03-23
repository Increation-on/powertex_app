import styles from './styles/headertest.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoTest from './LogoTest';
import Phones from '../Phones';
import HeaderSearch from './HeaderSearch';



const HeaderTopTest = () => {

    const [menu, setMenu] = useState();

    useEffect(() => {
        axios.get('/mocks/headerNav.json').then(response => {
            const data = response.data;
            setMenu(data);
        }).catch(err => console.log(err));
    }, []);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/nav').then(response => {
    //         const data = response.data;
    //         setTestMenu(data.values);
    //     }).catch(err => console.log(err));
    // }, []);

    return (
        <header className={styles.header}>
            <div className={styles.header_items_container}>
                <div className={styles.header_top_items_container}>
                    <LogoTest />
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