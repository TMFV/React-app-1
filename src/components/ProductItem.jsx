const ProductItem = ({ product }) => {
    return (
        <li className="item">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.count}</p>
        </li>
    );
};

export default ProductItem;