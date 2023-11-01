import { Link } from "react-router-dom";
import styles from './styles/products.module.css';

const ProductCard = ({ product }) => {
    return (
        <Link to={`${product.url}/${product.id}`} key={product.id}
            className={styles.preview_card}
            style={{ backgroundImage: `url(${product.img})` }}
        >
            <div className={styles.title}>{product.title}</div>
            <div className={styles.description}>{product.description}</div>
        </Link>

    );
};

export default ProductCard;