import React from 'react';
import AppStore from '../../stores/app-store';
import AppCartItem from './app-cart-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import {Link} from 'react-router';

const cartItems = () => {
    return {items: AppStore.getCart()}
};

const Cart = (props) => {
    let total = 0;
    let items = props.items.map((item, i) => {
        let subtotal = item.cost * item.qty;
        total += subtotal;
        return (
            <AppCartItem subtotal={subtotal} key={i} item={item} />
        )
    });
    return (
        <div>
            <h1>Cart</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
            <Link to="/">Continue Shopping</Link>
        </div>
    )
};

export default StoreWatchMixin(Cart, cartItems);
