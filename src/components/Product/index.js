
import { useEffect, useState } from "react";
import { getProductList } from "../../Services/ProductServices";
import "./Product.scss";
import ProductItem from "./ProductItem";
import { Col, Row } from 'antd';

function Product() {
    // Khai báo state 'products' để lưu danh sách sản phẩm
    const [products, setProducts] = useState([]);

    // Dùng useEffect để gọi API khi component được mount lần đầu tiên
    useEffect(() => {
        const fetchApi = async () => {
            // Gọi API và lưu kết quả vào state
            const result = await getProductList();
            setProducts(result.products); // Giả định API trả về { products: [...] }
        };

        fetchApi(); // Gọi hàm fetch dữ liệu
    }, []); // [] đảm bảo chỉ chạy 1 lần khi component render
    return (
        <>
            {/* Hiển thị danh sách sản phẩm */}
            <div className="product">
                <Row gutter={[20, 20]}>
                    {products.map((item,_) => (
                        <Col key={item.id} xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <ProductItem item={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default Product;
