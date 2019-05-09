import React, { Component } from 'react';
import axios from '../../axios-instance';

class AddItem extends Component{


    state = {
        itemForm: {
            name : {
                type: 'text',
                placeholder: 'Name',
                label:'Name',
                value:''
            },
            price : {
                type: 'text',
                placeholder: 'Price',
                label:'Price',
                value:''
            },
            img : {
                type: 'text',
                placeholder: 'Image URL',
                label:'Image Url',
                value:''
            }
        },
        formIsValid:false
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedItemForm = {
            ...this.state.itemForm
        };
        const updatedFormElement = {
            ...updatedItemForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedItemForm[inputIdentifier] = updatedFormElement;
        this.setState({itemForm: updatedItemForm});
    }

    addItemHandler = (event) => {
        event.preventDefault();
        const data = {};
        for (let formElementIdentifier in this.state.itemForm) {
            data[formElementIdentifier] = this.state.itemForm[formElementIdentifier].value;
        }
        axios.post('items', data)
            .then(response => {
                this.props.history.push('/items');
            })
            .catch(error => {

            });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.itemForm) {
            formElementsArray.push({
                id:key,
                config:this.state.itemForm[key]
            });
        }

        let form = (
            <form onSubmit={this.addItemHandler}>
                {formElementsArray.map(formElement => (
                    <div className="form-group" key={formElement.id}>
                        <label>{formElement.config.label}</label>
                        <input
                            className="form-control"
                            type={formElement.config.type}
                            value={formElement.config.value}
                            onChange={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );

        return (
            <div className="container">
                <h2>Put Items up for Sale</h2>
                {form}
            </div>

        );
    };
}

export default AddItem;