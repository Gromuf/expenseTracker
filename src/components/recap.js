import { useContext } from 'react'
import ProductsContext from '../contexts/products'
import { useState } from 'react'
import Selector from './Selector'
const Recap = () => {

    const { productList, amount, setProductList, setAmount } = useContext(ProductsContext)

    const [ProductId, setProductId] = useState(null)
    const [newProductDescr, setNewProductDescr] = useState('')
    const [newProductAmount, setNewProductAmount] = useState(0)
    const [newProductCategory, setNewProductCategory] = useState('')

    const editProduct = (id) => {
        setProductId(id)
        const selectedProduct = productList.find(product => product.id === id);
        if (selectedProduct) {
            setNewProductDescr(selectedProduct.descr);
            setNewProductAmount(selectedProduct.amount);
            setNewProductCategory(selectedProduct.category);
            setAmount(parseInt(amount) - parseInt(selectedProduct.amount))
        }
    }

    const descrChange = (event) => {
        setNewProductDescr(event.target.value);
    }

    const amountChange = (event) => {
        setNewProductAmount(event.target.value);
    }

    const categoryChange = (event) => {
        setNewProductCategory(event.target.value);
    }

    const update = async () => {
        try {
            const updatedProduct = {
                descr: newProductDescr,
                amount: newProductAmount,
                category: newProductCategory
            }
            const updatedProducts = productList.map(product =>
                product.id === ProductId ? { ...product, ...updatedProduct } : product
            );
            setProductList(updatedProducts)
            setAmount(parseInt(amount) + parseInt(updatedProduct.amount))
            setProductId(null)
        } catch (error) {
            console.error(error)
        }
    }


    const deleteProduct = async (id, price) => {
        const updatedProducts = productList.filter(product => product.id !== id)
        setProductList(updatedProducts)
        setAmount(parseInt(amount) - parseInt(price))
    }



    return (
        <div className='field'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, index) => {

                        return (
                            <tr key={index}>
                                <td>{product.descr}</td>
                                <td>{product.amount} €</td>
                                <td>{product.category}</td>
                                <td><button className="button is-link is-light" onClick={() => editProduct(product.id)}>Edit</button></td>
                                <td><button className="button is-link is-light" onClick={() => deleteProduct(product.id, product.amount)}>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <td>{amount} €</td>
                    </tr>
                </tfoot>
            </table>
            {ProductId !== null && (
                <div className="field">
                    <h2>Modifier le produit</h2>
                    <div className="field">
                        <input
                            className="input"
                            type="text"
                            value={newProductDescr}
                            onChange={descrChange}
                            placeholder="Nouvelle description"
                        />
                    </div>
                    <div className="field">
                        <input
                            className="input"
                            type="number"
                            value={newProductAmount}
                            onChange={amountChange}
                            placeholder="Nouveau prix"
                        />
                    </div>
                    <div className="field">
                        <Selector
                            selector={['Groceries', 'Utilities', 'Entertainment']}
                            onChange={setNewProductCategory} />
                    </div>
                    <div className='control'>
                        <button className='button is-link' onClick={update}>Mettre à jour</button>
                    </div>

                </div>
            )}
        </div>
    )
}
export default Recap