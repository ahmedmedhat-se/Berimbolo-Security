import axios from "axios";
const { createContext, useState, useEffect } = require("react");

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getSecurityProducts = async() => {
        try {
            const res = await axios.get("/Store/products.json");
            setProducts(res.data);
        } catch (error) {
            console.error("Error Fetching Data : ", error)
        }
    }

    useEffect(() => {
        getSecurityProducts();
    }, []);

    return(
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}