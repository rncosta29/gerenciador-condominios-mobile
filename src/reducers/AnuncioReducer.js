export const initialState = {
    title: '',
    description: '',
    photo: '',
    price: 0
};

export const AnuncioReducer = (state, action) => {
    switch(action.type) {
        case 'setTitle':
            return { ...state, title: action.payload.title };
        break;
        case 'setDescription':
            return { ...state, description: action.payload.description };
        break;
        case 'setPhoto':
            return { ...state, photo: action.payload.photo };
        break;
        case 'setPrice':
            return { ...state, price: action.payload.price };
        break;
        default:
            return state;
    }
}