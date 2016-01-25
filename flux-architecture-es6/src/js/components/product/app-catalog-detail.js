import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import {Link} from 'react-router';

function getCatalogItem(props) {
    let item = AppStore.getCatalog().find(({id}) => id === props.params.item)
    return {item}
}

const CatalogDetail = (props) => {
    return (
        <div>
            <h4>{props.item.title}</h4>
            <img src="http://img1.tmon.kr/deals/2016/01/20/273084661/front_sub_f92d3.jpg" width="50%" />
            <p>{props.item.description}</p>
            <p>${props.item.cost} <span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span></p>
            <div className="btn-group">
                <Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
                <CartButton handler={AppActions.addItem.bind(null, props.item)} txt="Add To Cart" />
            </div>
        </div>
    )
}

export default StoreWatchMixin(CatalogDetail, getCatalogItem)
