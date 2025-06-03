// case 'UPDATE_QUANTITY':
//     return state.map(item =>
//         item.id === action.id
//             ? { ...item, quantity: item.quantity + action.quantity }
//             : item
//     );


const cartReducer = (state = [], action) => {
    let newState = [...state];
 switch (action.type) {
    case 'ADD_TO_CART':
        return [...state, 
           {
            id : action.id,
            info: action.info,
            quantity: 1
           }];

    case 'UPDATE_QUANTITY':
        const itemUpdate = newState.find(item => item.id === action.id);
        itemUpdate.quantity += action.quantity;
        console.log(itemUpdate);
      return newState;

        case 'REMOVE_FROM_CART':
      newState=newState.filter(item => item.id !== action.id);
      return newState;  
        case 'DELETE_ALL_CART':
      newState=[];
      return newState;  
    default:
        return state;
 }
}

export default cartReducer;