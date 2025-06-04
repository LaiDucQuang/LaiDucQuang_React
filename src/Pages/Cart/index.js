
import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./Cart.scss";
import { deleteAllCart } from "../../actions/cart";
import { Col, Row } from "antd";

function Cart() {
    // Lấy dữ liệu giỏ hàng 
    const cart = useSelector((state) => state.cartReducer);

    // Dùng để gửi action
    const dispatch = useDispatch();

    // Tính tổng tiền giỏ hàng với giá đã giảm
    const total = cart.reduce((sum, item) => {
        // Tính giá sau khi áp dụng chiết khấu
        const priceNew = (item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(0);
        // Cộng dồn tổng (giá * số lượng)
        return sum + priceNew * item.quantity;
    }, 0);

    // Xử lý khi click nút "Delete All"
    const handleDelAll = () => {
        dispatch(deleteAllCart());
    }

    return (
        <>

            <h2>Shopping Cart</h2>

            {/* Nút xóa toàn bộ giỏ hàng */}
            <button onClick={handleDelAll} className="btn__del-all">Delete All</button>

            <div>
                {/* Nếu giỏ hàng có sản phẩm */}
                {cart.length > 0 ? (
                    <>

                        <CartList />

                        <Row gutter={[20,20]}>
                            <Col xxl={24}>
                                <div className="cart__total">
                                    Total Price: <span>{total}$</span>
                                </div>
                            </Col>
                        </Row>
                    </>
                ) : (
                    // Nếu giỏ hàng trống
                    <div className="cart__empty">Empty Cart</div>
                )}
            </div>
        </>
    );
}

export default Cart;
