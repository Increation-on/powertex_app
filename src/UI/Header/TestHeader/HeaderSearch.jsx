import { useState, useEffect } from "react";
import styles from './styles/headersearch.module.css';
import search from './../../../images/search_icon.png';
import close from './../../../images/close_icon_1.png';
import axios from "axios";
import { Link } from "react-router-dom";

const HeaderSearch = () => {

    const [dataList, setDataList] = useState(null);
    const [searchItem, setSearchItem] = useState('');



    useEffect(() => {

        axios.get('/mocks/detailedProduct.json').then(response => {
            const data = response.data;
            setDataList(data);
        }).catch(err => console.log(err));

    }, []);



    if (dataList) {
        var filteredItems = dataList.filter(item => {
            return item.title.toLowerCase().includes(searchItem.toLowerCase());
        });
    }

    const [autoCompleteHide, setAutocompleteHide] = useState(false);

    const itemClickHandler = (e) => {
        setSearchItem(e.target.textContent);
        setAutocompleteHide(true);
    }


    const handleShowHide = () => {
        if (searchItem) {
            setSearchItem('');
        }
    }



    return (
        <div className={styles.header_search}>
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
            // onClick={inputClickHandler}
            />
            {/* <ul className={searchItem && autoCompleteHide ? styles.autocomplete_close: styles.autocomplete}> */}
            <ul className={searchItem  ?  styles.autocomplete : styles.autocomplete_close}>
                {dataList && searchItem ? filteredItems.map((el) => {
                    return (

                        <li
                            key={el.id} className={styles.autocomplete_item}

                        >
                            <Link onClick={itemClickHandler} to={`products/${el.id}`}> {el.title.slice(0, 13)} </Link>
                        </li>


                    )
                }) : null}
            </ul>

        </div>
    )
}

export default HeaderSearch;

