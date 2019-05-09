import * as actionTypes from './actions';

const initialState = {
    totalItemsInCart: getTotalItemsInCart()
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            addItem(action.itemId);
            return {
                totalItemsInCart: getTotalItemsInCart()
            };
        default:
            return state;
    }
};


function addItem(itemId) {
    let items = localStorage.getItem('items');
    items = JSON.parse(items);
    if (localStorage.getItem('items') !== null && items.hasOwnProperty(itemId)) {
        items[itemId] += 1;
    } else {
        items = {
            ...items,
            [itemId] : 1
        };
    }
    localStorage.setItem('items', JSON.stringify(items));
}

function getTotalItemsInCart() {
    let items = localStorage.getItem('items');
    items = JSON.parse(items);
    var count = 0;
    for(let itemId in items) {
        if (items.hasOwnProperty(itemId)) {
            count += parseInt(items[itemId]);
        }
    }
    return count;
}


export default reducer;