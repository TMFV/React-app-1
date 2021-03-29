const ProductItem = ({ product }) => {
    return (
        <li className="item">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.count}</p>
            <img className="product-item__img" src={product.imgRef} alt ={product.name} />
        </li>
    );
};

export default ProductItem;
