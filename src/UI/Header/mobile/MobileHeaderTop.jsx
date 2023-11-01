import styles from './styles/mobileHeader.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileLogo from './MobileLogo';
import Phones from '../Phones';


const MobileHeaderTop = () => {

    const [menu, setMenu] = useState();

    useEffect(() => {
        axios.get('https://server.powertex.by/nav').then(response => {
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
            <MobileLogo />
            <div className={styles.viewport_container}>
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
            </div>
        </header>
    )
}

export default MobileHeaderTop;