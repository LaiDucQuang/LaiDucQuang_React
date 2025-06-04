import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../actions/cart";
import "./Cart.scss";
function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const handleUp = () => {
        dispatch(updateQuantity(item.id));
    };
    const handleDown = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1));
        }
    };
    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            dispatch(updateQuantity(item.id, value - item.quantity));
        } else {
            e.target.value = item.quantity;
        }
    };
    const handleDel = () => {
        dispatch(removeFromCart(item.id));
    }
    return (
        <>
            <div className="cart__item" key={item.id}>
                <img src={item.info.thumbnail} alt={item.info.title} className="cart__thumbnail" />
                <div className="cart__item-details">
                    <h3 className="cart__title">{item.info.title}</h3>
                    <p className="cart__price">{item.info.price}$</p>
                    <p className="cart__new-price">{(item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(0)}$</p>
                    <p className="cart__stock">Stock: {item.info.stock}</p>
                </div>
                <div className="cart__quantity">
                    <button onClick={handleDown}>-</button>
                    <input type="number" value={item.quantity} onChange={handleChange} />
                    <button onClick={handleUp}>+</button>
                </div>
                <div className="cart__item-actions">
                    <button onClick={handleDel}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem;