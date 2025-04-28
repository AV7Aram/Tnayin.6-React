import style from './ProductsCount.module.css';

export const ProductsCount = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className={style.countContainer}>
            <button className={style.countButton} onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button className={style.countButton} onClick={onIncrement}>+</button>
        </div>
    );
};