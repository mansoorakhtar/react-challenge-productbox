import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import axios from '../../axios-instance';

class Items extends Component {

    state = {
        items : []
    };

    componentDidMount() {
        axios.get('items')
            .then(response => {
                this.setState({items: response.data});
            });
    }

    render() {
        return (
            <div className="container">
                <h2>List Items</h2>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {this.state.items.map(item => (
                                <div className="col-md-4" key={item.id}>
                                    <div className="card mb-4 shadow-sm">
                                        <img alt="No" style={{'height':'250px'}} className="img-thumbnail" src={axios.defaults.baseURL+item.img}/>
                                        <div className="card-body">
                                            <p className="card-text">{item.name}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary"
                                                        onClick={() => this.props.onItemAdded(item.id)}
                                                        >Add to Cart</button>
                                                <small className="text-muted">Price : {item.price} PKR</small>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded : (itemId) => dispatch({type:actionTypes.ADD_ITEM, itemId: itemId})
    };
}

export default connect(null, mapDispatchToProps)(Items);

