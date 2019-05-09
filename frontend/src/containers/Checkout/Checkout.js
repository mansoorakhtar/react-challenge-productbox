import React, { Component } from 'react';
import axios from '../../axios-instance';
import { connect } from 'react-redux';
import './Checkout.css';


class Checkout extends Component {


    state = {
        checkoutItems : [],
        totalAmount : 0
    };

    componentDidMount() {
        let selectedItems = localStorage.getItem('items');
        if (selectedItems !== null) {
            axios.get('items')
                .then(response => {
                    selectedItems = JSON.parse(selectedItems);
                    let checkoutItems = [];
                    let totalAmount = 0;
                    response.data.forEach(item => {
                        if (selectedItems.hasOwnProperty(item.id)) {
                            checkoutItems.push({
                                ...item,
                                qty : selectedItems[item.id]
                            });
                            totalAmount += item.price * selectedItems[item.id];
                        }
                    });
                    this.setState({
                        totalAmount: totalAmount,
                        checkoutItems: checkoutItems
                    });
                });
        }

    }

    render() {
        return (
            <div className="container">
                <div className="py-5 text-center">
                    <h2>Checkout</h2>
                </div>
                <div className="row">
                    <div className="col-md-12 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">{this.props.totalItemsInCart}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {this.state.checkoutItems.map(item => (
                                <li className="list-group-item d-flex justify-content-between lh-condensed" key={item.id}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={axios.defaults.baseURL+item.img} alt="No Attachment" className="img-responsive img-rounded float-left checkout-img-thumbnail" />
                                            <span className="float-right ml-2">
                                                <h6 className="my-0">{item.name}</h6>
                                                <p className="text-muted"> Price : {item.price} (PKR)</p>
                                                Quantity : {item.qty}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-muted">{ item.price * item.qty }</span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (PKR)</span>
                                <strong>{this.state.totalAmount}</strong>
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalItemsInCart : state.totalItemsInCart
    };
}

export default connect(mapStateToProps, null)(Checkout);