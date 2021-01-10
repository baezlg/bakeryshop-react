import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import {productReducer} from "./productReducer";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const initialState = {
        products: [
            {
                id: uuidv4(),
                product: "Croissant",
                price: 1.8,
                quantity: 1,
                store: "Lasnamäe store"
            },
            {
                id: uuidv4(),
                product: "Cupcake",
                price: 2,
                quantity: 3,
                store: "Ülemiste store"
            },
            {
                id: uuidv4(),
                product: "Éclair",
                price: 2.5,
                quantity: 5,
                store: "Mustamäe store"
            },
        ]
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    // ADD PRODUCT
    const addProduct = product => {
        product.id = uuidv4();
        dispatch({
            type: "ADD_PRODUCT",
            payload: product
        })
    }


    return (
        <ProductContext.Provider value={{
            products: state.products,
            addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
