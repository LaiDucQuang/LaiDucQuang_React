import { Link } from "react-router-dom";

function ListCategory(props) {
    const { item } = props
    return (
        <>
            <Link to="/product">
                <div className="category__item" >
                    {item.name}
                </div>
            </Link>
        </>
    )
}
export default ListCategory;