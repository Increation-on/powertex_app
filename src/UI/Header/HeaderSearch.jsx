import { useState, useEffect, useRef } from "react";
import styles from './../styles/headersearch.module.css';
import search from './../../images/search_icon.png';
import close from './../../images/close_icon_1.png';
import axios from "axios";
import { Link } from "react-router-dom";

const HeaderSearch = () => {

    const [dataList, setDataList] = useState(null);
    const [searchItem, setSearchItem] = useState('');



    useEffect(() => {

        axios.get('/mocks/appSearch.json').then(response => {
            const data = response.data;
            setDataList(data);
        }).catch(err => console.log(err));

    }, []);


    if (dataList) {
        var filteredItems = dataList.filter(item => {
            return item.title.toLowerCase().includes(searchItem.toLowerCase());
        });
    }

    const [autoCompleteHide, setAutocompleteHide] = useState(true);

    const inputClickHandler = () => {
        setAutocompleteHide(true);
    }

    const itemClickHandler = (e) => {
        setSearchItem(e.target.textContent);
        setAutocompleteHide(false);
    }


    const handleShowHide = () => {
        if (searchItem) {
            setSearchItem('');
        }
    }



 
    return (
        <div className={styles.header_search}>
            <div className={styles.search_bar}>
                <span className={styles.header_search_ico}
                    onClick={handleShowHide}
                >
                    <img
                        className={!searchItem ? styles.header_search_ico_search : styles.header_search_ico_close}
                        src={!searchItem ? search : close}
                        alt="search"
                    />
                </span>
                <input
                    type="text"
                    name="search"
                    value={searchItem}
                    autoComplete="off"
                    placeholder="Поиск по сайту"
                    onChange={(e) => setSearchItem(e.target.value)}
                    onClick={inputClickHandler}
                />
            </div>

            <ul className={searchItem ? styles.autocomplete : styles.autocomplete_close}>
                {dataList && searchItem && autoCompleteHide ? filteredItems.map((el) => {
                    return (

                        <li 
                            key={el.id} className={styles.autocomplete_item}

                        >

                            {el.title[0] === "P"
                                ?
                                <Link onClick={itemClickHandler} to={`${el.url}/${el.id}`}>{el.title}</Link>
                                :
                                <Link onClick={itemClickHandler} to={`${el.url}`}>{el.title}</Link>
                            }


                        </li>



                    )
                }) : null}
            </ul>

        </div>
    )
}

export default HeaderSearch;

