export const initialState ={
    favorites:[],
};
const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD_TO_FAV':
            return {
                ...state,
                favorites:[...state.favorites, action.item]
            };
        default:
            return state;
    }
};
export default reducer;