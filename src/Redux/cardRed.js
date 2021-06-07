const SET_ADD_TO_CARD = 'SET_ADD_TO_CARD';
const SET_REMOVE_TO_CARD = 'SET_REMOVE_TO_CARD';

const initialState = {
  items: [
    // {
    //   id: 1,
    //   color: 'white',
    //   price: 200,
    // },
    // {
    //   id: 2,
    //   color: 'black',
    //   price: 250,
    // },
    // {
    //   id: 3,
    //   color: 'green',
    //   price: 300,
    // },
    // {
    //   id: 4,
    //   color: 'grey',
    //   price: 350,
    // },
    // {
    //   id: 5,
    //   color: 'yellow',
    //   price: 400,
    // },
  ],
  filterBy: 'Home',
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_TO_CARD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_REMOVE_TO_CARD:
      return {
        ...state,
        items: state.items.filter((o) => o.id != action.payload),
      };

    default:
      return state;
  }
};

export const setAddToCard = (obj) => ({
  type: SET_ADD_TO_CARD,
  payload: { obj },
});
export const setRemoveToCard = (id) => ({
  type: SET_REMOVE_TO_CARD,
  payload: { id },
});

export default itemsReducer;
