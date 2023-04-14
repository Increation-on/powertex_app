import { Link } from "react-router-dom";
// import styles from './styles/products.module.css';
import styles from './styles/main.module.css';

const MainProductCardFallback = ({ product }) => {
    return (
        <Link to={`${product.url}/${product.id}`} key={product.id}
            className={styles.preview_card}
            style={{ backgroundImage: `url(${product.lazyimg})` }}
        >
            <div className={styles.title_test}>{product.title}</div>
            <div className={styles.description_test}>{product.description}</div>
        </Link>

    );
};

export default MainProductCardFallback;