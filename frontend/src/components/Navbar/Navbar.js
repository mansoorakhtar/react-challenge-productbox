import React, {Component} from 'react';
import CartIcon from './../../assets/images/cart.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <NavLink to="/" className="navbar-brand">
                        RandoStore
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/add-item" className="nav-link">
                                    Put Items up for Sale
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/items" className="nav-link">
                                    Browse Our Items
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/checkout" className="nav-link">
                                    Checkout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/checkout" className="btn btn-cart">
                        <img className="margin" alt="Cart" src={CartIcon} />
                        <span className="badge badge-light">{this.props.count}</span>
                    </NavLink>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        count : state.totalItemsInCart
    };
};

export default connect(mapStateToProps, null)(Navbar);

