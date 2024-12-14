import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

function Products() {
    const { products } = useContext(ProductContext);

    return (
        <div className="container-fluid products-container">
            <div className="row">
                <h3>Berimbolo Products</h3>
                {products.map((product) => {
                    return (
                        <div className="col-md-3">
                            <div className="card h-100">
                                <img src={product.image} alt={product.title}
                                    className="card-img-top" height={200} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>{product.description}</p>
                                    <p>Price : {product.price}$</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/cart" className="btn w-100 d-block">
                                        <FontAwesomeIcon icon={faCartShopping} /> Cart

                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Products;