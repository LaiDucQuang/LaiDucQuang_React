import { useEffect, useState } from "react";
import { getCategory } from "../../Services/ProductServices";
import { Col, Row } from "antd";
import "./Category.scss";
import ListCategory from "./ListCategory";


function Category(){
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        const fetchApi = async () =>{
            const result = await getCategory();
            setCategory(result);
        };
        fetchApi();
    },[]);

    return(
        <>
        <div className="category">
            <Row gutter={[20,20]}>
                {category.map((item )=>(
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                        <ListCategory  item = {item} />
                    </Col>
                ))}

            </Row>
        </div>
        </>
    )
}

export default Category;