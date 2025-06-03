import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    const handleAddToCart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id));
        } else {
            dispatch(addToCart(item.id, item));
        }
        console.log(cart);
    }

    return (
        <>
            <div className="product__item">
                <img src={item.thumbnail} alt={item.title} className="product__item-thumbnail" />
                <p className="product__item-discount">Sale {item.discountPercentage}%</p>
                <h3 className="product__item-title">{item.title}</h3>
                 <p className="product__item-old-price">{item.price}$</p>
                <p className="product__item-new-price">{(item.price * (100 - item.discountPercentage) / 100).toFixed(0)}$</p>
                <div className="product__item-warehouse">
                    <p className="product__item-stock">Stock: {item.stock}</p>
                <button className="product__item-btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>

        </>
    )
}
export default ProductItem;