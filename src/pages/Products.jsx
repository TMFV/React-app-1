import ProductList from "../components/ProductList";

const products = [
    {
        id: 1,
        name: 'Phone 1100',
        price: 5000,
        count: 8,
        imgRef: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331397_sd.jpg",
    },
     {
        id: 2,
        name: 'Phone 2200',
         price: 5500,
        count: 0,
        imgRef: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331397_sd.jpg",
    },
      {
        id: 3,
        name: 'Phone 3300',
          price: 5550,
        count: 10,
        imgRef: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331397_sd.jpg",
    },
       {
        id: 4,
        name: 'Notebook i9',
           price: 7777,
        count: 3,
        imgRef:"https://i.citrus.ua/imgcache/size_500/uploads/shop/f/4/f42c1117a2186866f45b7ac42860b9b0.jpg",
    },
];
const Products = () => {

    return (
        <div className="products">
            <ProductList products = {products} />
            <p>1</p>
        </div>
    );
};


export default Products;