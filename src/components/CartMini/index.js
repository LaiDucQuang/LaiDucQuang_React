import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartMini.scss"

function CartMini(){
    const cart = useSelector((state) => state.cartReducer);
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    return(
        <>
        <Link to="/cart" className="layout-default__CartLink"> <ShoppingCartOutlined /> ({total}) </Link>

        </>
    )
}
export default CartMini;