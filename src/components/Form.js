import { useForm } from 'react-hook-form'
import Selector from './Selector'
import { useState } from 'react'
import { useContext } from 'react'
import ProductsContext from '../contexts/products'
const Form = () => {

    const { productList, setProductList, setAmount, amount } = useContext(ProductsContext)

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [category, setCategory] = useState('')




    const addProduct = (data) => {
        const newProduct = {
            id: productList.length + 1,
            category: data.category,
            amount: data.amount,
            descr: data.descr,
        }
        setAmount(parseInt(amount) + parseInt(data.amount))
        setProductList([...productList, newProduct])
    }
    const onSubmit = async (data) => {
        data.category = category
        addProduct(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >

            <div className="field">
                <label className="label">description : </label>
                <div className="control">
                    <input className="input" type="text" {...register('descr', { required: true })}></input>
                    {errors.descr && <p style={{ color: 'red' }}>Description is mandatory</p>}
                </div>
            </div>
            <div className="field">
                <label className="label">amount : </label>
                <div className="control">
                    <input className="input" type="number" {...register('amount', { required: true })}></input>
                    {errors.amount && <p style={{ color: 'red' }}>Amount is mandatory</p>}
                </div>
            </div>

            <div className="field">
                <Selector
                    nom={'Category : '}
                    selector={['Groceries', 'Utilities', 'Entertainment']}
                    onChange={setCategory} />
            </div>
            <div className='control'>
                <button className='button is-link'>ajouter</button>
            </div>

        </form >
    )
}
export default Form