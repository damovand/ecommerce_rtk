import React, { useState,useEffect } from 'react';
import {useSelector} from 'react-redux';
import './CartSlice';

const SuperCoins = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(25);
        } else if (totalAmount >= 300) {
            setSuperCoins(35);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);
    console.log('Total Amount',totalAmount);
    return(
        <>
          <div className="super-coins" style={{textAlign:'center'}}>
          <h2 className="super-coins-title">Super Coins</h2>
          <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
          </div>)
          <div>'The total amount is {superCoins}</div> 
        </>
      );
    } ;
export default SuperCoins