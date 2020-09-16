import moment from "moment";

const initialState = {
    products: [
        {
            id: 1,
            name: 'apple',
            details: "apple, apple, apple",
            priority: 2,
            have: false,
            changes: [],
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlWmuqneoK6-xy3xT92ds7gQWO_YhqqOBkSQ&usqp=CAU"
        },
        {
            id: 2,
            name: 'pineapple',
            details: "pineapple, pineapple, pineapple",
            priority: 1,
            have: true,
            changes: [],
            img: "https://images.ctfassets.net/6jpeaipefazr/37Tf4qCVGAKcboY6qZJBn3/5f02e8173b7eb75108f18e6fe3484942/co-op-gold-pineapple.jpg?w=1080&h=1080"},
        {
            id: 3,
            name: 'banana',
            details: "banana, banana, banana",
            priority: 3,
            have: false,
            changes: [],
            img: "https://img1.mashed.com/img/gallery/heres-what-happens-when-you-eat-a-banana-every-day/intro-1596497583.jpg"
        },
        {
            id: 4,
            name: 'cherry ',
            details: "cherry, cherry, cherry",
            priority: 5,
            have: false,
            changes: [],
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVyu1QyVDeXGBBfeob_pZG72CIdeG1Mk6Izw&usqp=CAU"
        },
        {
            id: 5,
            name: 'kivi',
            details: "kivi, kivi, kivi",
            priority: 1,
            have: false,
            changes: [],
            img: "https://sipbitego.com/wp-content/uploads/2018/03/feature-healthy-snack-dried-fruit-how-to-make-dried-kiwi-in-the-oven-or-food-processor.jpg"
        },
        {
            id: 6,
            name: 'lemon',
            details: "lemon, lemon, lemon",
            priority: 2,
            have: true,
            changes: [],
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/1024px-Lemon.jpg"
        },
    ],
    order: [],
    filterOrder: [],
    changes: []
}

const reducer = (state= initialState, action) => {

    switch(action.type) {
        case "ADD_PRODUCT":
            const productId = state.products.findIndex( item => item.id === action.payload);
            const newOrderItem = {...state.products[productId], count: 1};

            const findOrderItem = state.order.findIndex( item => item.id === action.payload);
            const isAvailableOrderItem = state.order[findOrderItem];

            if (isAvailableOrderItem) {
                return state
            } else {
                return {
                    ...state,
                    order: [
                        ...state.order,
                        newOrderItem
                    ],
                    filterOrder: [
                        ...state.order,
                        newOrderItem
                    ],
                };
            }

        case "INCREASE_ORDER_ITEM":
            const increaseOrderIndex = state.order.findIndex( item => item.id === action.payload);
            const increaseOrder = {...state.order[increaseOrderIndex]};

            const newCartItem = {
                ...increaseOrder,
                count: increaseOrder.count + 1,
            };

            return {
                ...state,
                order: [
                    ...state.order.slice(0, increaseOrderIndex),
                    newCartItem,
                    ...state.order.slice(increaseOrderIndex + 1),
                ],
                filterOrder: [
                    ...state.order.slice(0, increaseOrderIndex),
                    newCartItem,
                    ...state.order.slice(increaseOrderIndex + 1),
                ]
            };

        case "DECREASE_ORDER_ITEM":
            const decreaseOrderIndex = state.order.findIndex( item => item.id === action.payload);
            const decreaseOrder = {...state.order[decreaseOrderIndex]};

            const newCartItem3 = {
                ...decreaseOrder,
                count: decreaseOrder.count - 1,
            };

            if (newCartItem3.count) {
                        return {...state,
                            order: [
                                ...state.order.slice(0, decreaseOrderIndex),
                                newCartItem3,
                                ...state.order.slice(decreaseOrderIndex + 1),
                            ],
                            filterOrder: [
                                ...state.order.slice(0, decreaseOrderIndex),
                                newCartItem3,
                                ...state.order.slice(decreaseOrderIndex + 1),
                            ]
                        };
                    } else {
                        return {
                            ...state,
                            order: [
                                ...state.order.slice(0, decreaseOrderIndex),
                                ...state.order.slice(decreaseOrderIndex + 1),
                            ],
                            filterOrder: [
                                ...state.order.slice(0, decreaseOrderIndex),
                                ...state.order.slice(decreaseOrderIndex + 1),
                            ]
                        }
                    }

        case "DELETE_ITEM":
            const deleteOrderId = state.order.findIndex( item => item.id === action.payload);

            return {
                ...state,
                order: [
                    ...state.order.slice(0, deleteOrderId),
                    ...state.order.slice(deleteOrderId + 1),
                ],
                filterOrder: [
                    ...state.order.slice(0, deleteOrderId),
                    ...state.order.slice(deleteOrderId + 1),
                ],
            }

        case "HAVE_ITEM":
            const haveId = state.order.findIndex( item => item.id === action.payload);
            const haveItem = {...state.order[haveId]};
            const orderHaveItemId = state.order.findIndex( item => item.id === action.payload);

            const changeHaveItem = moment().format('LT');

            const newHaveItem = {
                ...haveItem,
                have: !haveItem.have,
                changes: [
                    ...state.order[orderHaveItemId].changes,
                    changeHaveItem
                ]
            };

            return {
                ...state,
                order: [
                    ...state.order.slice(0, orderHaveItemId),
                    newHaveItem,
                    ...state.order.slice(orderHaveItemId + 1),
                ],
                filterOrder: [
                    ...state.order.slice(0, orderHaveItemId),
                    newHaveItem,
                    ...state.order.slice(orderHaveItemId + 1),
                ],
            }

        case "FILTER_ALL":
            return {
                ...state,
                filterOrder: state.order
            }

        case "FILTER_HAVE":
            const filterArrHave = state.order.filter( item => {
                return item.have === true;
            } )

            return {
                ...state,
                filterOrder: filterArrHave
            }

        case "FILTER_RUN_OUT":
            let filterArrNotHave = state.order.filter( item => {
                return item.have === false;
            } )

            return {
                ...state,
                filterOrder: filterArrNotHave
            }

        default:
            return state
    }
}

export {
    reducer
}