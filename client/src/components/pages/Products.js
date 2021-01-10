import React, {useContext, useState} from 'react';
import { ProductContext } from "./../../context/product/productContext";

const Products = () => {
    const productContext = useContext(ProductContext);
    const [prod, setProd] = useState({
        product: "",
        price: "",
        quantity: "",
        store: ""
    });

    const onChange = e => setProd({ ...prod, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        productContext.addProduct(prod);
        setProd({
            product: "",
            price: "",
            quantity: "",
            store: ""
        })
    }

    const { products } = productContext;
    return (
        <>
            <h2>Products</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price (€)</th>
                        <th>Quantity (pcs)</th>
                        <th>Store</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                            <tr key={item.id}>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.store}</td>
                            </tr>        
                        ))}
                    <tr>
                        <td><input
                            type="text"
                            placeholder="Product"
                            name="product"
                            value={prod.product}
                            onChange={onChange}
                        /></td>
                        <td><input
                            type="text" 
                            placeholder="Price"
                            name="price"
                            value={prod.price}
                            onChange={onChange}
                        /></td>
                        <td><input
                            type="text"
                            placeholder="Quantity"
                            name="quantity"
                            value={prod.quantity}
                            onChange={onChange}
                        /></td> 
                        <td><input
                            type="text"
                            placeholder="Store"
                            name="store"
                            value={prod.store}
                            onChange={onChange}
                        /></td>
                        <td><input type="submit" onClick={onSubmit} value="Add" /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Products;
