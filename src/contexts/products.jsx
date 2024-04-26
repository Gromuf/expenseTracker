import { createContext } from "react";
import { useState } from "react";
const ProductsContext = createContext()

export const Provider = ({ children }) => {


    const [productList, setProductList] = useState([])
    const [amount, setAmount] = useState(0)
    const valueToShare = {
        productList,
        setProductList,
        amount, setAmount,
    }

    return (
        <ProductsContext.Provider value={valueToShare} >{children}</ProductsContext.Provider>
    )
}
export default ProductsContext