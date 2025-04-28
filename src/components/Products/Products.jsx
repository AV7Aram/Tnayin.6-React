import { useState } from 'react';
import { ProductsCount } from '../ProductsCount/ProductsCount';
import style from './Products.module.css';

export const Products = ({ products: initialProducts }) => {
    const [products, setProducts] = useState(
        initialProducts.map(product => ({
            ...product,
            count: product.count || 1
        }))
    );

    const handleIncrement = (id) => {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, count: product.count + 1, price: product.price * 2 }
                : product
        ));
    };

    const handleDecrement = (id) => {
        setProducts(products.map(product =>
            product.id === id && product.count > 1
                ? { ...product, count: product.count - 1, price: product.price / 2 }
                : product
        ));
    };

    return (
        <div className={style.productsContainer}>
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className={style.card}>
                            <div><img src={product.image} alt="#" /></div>
                            <div className={style.cardDescription}>
                                <p className={style.productTitle}>{product.title}</p>
                                <p className={style.productDescription}>{`Description: ${product.description}`}</p>
                                <span className={style.productPrice}>{`Price: ${product.price}$`}</span>
                                <ProductsCount
                                    count={product.count}
                                    onIncrement={() => handleIncrement(product.id)}
                                    onDecrement={() => handleDecrement(product.id)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
