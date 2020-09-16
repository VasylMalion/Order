const addProduct = (id) => {
    return {
        type: 'ADD_PRODUCT',
        payload: id
    }
};

const increaseProduct = (id) => {
    return {
        type: 'INCREASE_ORDER_ITEM',
        payload: id
    }
};

const decreaseProduct = (id) => {
    return {
        type: 'DECREASE_ORDER_ITEM',
        payload: id
    }
};

const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
};

const haveItem = (id) => {
    return {
        type: 'HAVE_ITEM',
        payload: id
    }
};

const filterAll = () => {
    return {
        type: 'FILTER_ALL',
    }
};

const filterHave = () => {
    return {
        type: 'FILTER_HAVE',
    }
};

const filterRunOut = () => {
    return {
        type: 'FILTER_RUN_OUT',
    }
};

export {
    addProduct,
    increaseProduct,
    decreaseProduct,
    deleteItem,
    haveItem,
    filterAll,
    filterHave,
    filterRunOut
}