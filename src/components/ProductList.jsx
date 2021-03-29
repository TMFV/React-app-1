import ProductItem from './ProductItem'
const ProductList = ({ products }) => (
            <ul>
            {products.map(
                (product) =>
                    !!product.count &&
                    <ProductItem key={`${product.id}_${product.price}`} product={product} />,
            )}
            </ul>
);


export default ProductList;