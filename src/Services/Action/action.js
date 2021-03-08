import {ADD_TO_CART} from "../Constant"
export const addToCard = (data) => {
    console.warn("action")
    return {
        type: ADD_TO_CART,
        data: data
    }
};

// export const removeToCard = (data) => {
//     return {
//         type: 'REMOVE_TO_CARD',
//         data: data
//     }
// };
