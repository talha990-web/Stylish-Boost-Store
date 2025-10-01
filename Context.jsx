import React, { createContext , useState } from 'react'
import all_product from '../Components/Assets/all_product.js'

export const Context = createContext(null)

const get_default_cart = () => {
        let cart = {} ;
        for (let index = 0; index < all_product.length+1; index++) {
             cart[index] = 0 ;
            }
        return cart ;
     }

const ShopContextProvider = (props) => {

    const [cartItems , setCartItems] = useState(get_default_cart())

     const add_to_cart = (item_id) => {
        setCartItems((prev) => ({...prev,[item_id]:prev[item_id]+1}))
        console.log(cartItems)
     }

     const remove_from_cart = (item_id) => {
        setCartItems((prev) => ({...prev,[item_id]:prev[item_id]-1}))
     }

     const get_total_cart_amount = () => {
        let total_amount = 0 ;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let item_info = all_product.find((product) => product.id === Number(item))
                total_amount += cartItems[item] * item_info.new_price ;
            }
        }
        return total_amount ;
     }

     const get_total_cart_items = () => {
        let total_item = 0 ;
        for(const item in cartItems){
            if(cartItems[item]>0){
                total_item += cartItems[item] 
            }
        }
        return total_item ;
     }

     const context_value = {all_product , cartItems , add_to_cart , remove_from_cart , get_total_cart_amount , get_total_cart_items}

     return(
            <Context.Provider value={context_value}>
                {props.children}
            </Context.Provider>
     )
}

export default ShopContextProvider