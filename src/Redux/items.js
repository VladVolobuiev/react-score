const SET_ITEMS = 'SET_ITEMS';

const initialState = {
  // isLoading: false,
  items: [
    {
      id: 1,
      color: 'white',
      price: 200,
    },
    {
      id: 2,
      color: 'black',
      price: 250,
    },
    {
      id: 3,
      color: 'green',
      price: 300,
    },
    {
      id: 4,
      color: 'grey',
      price: 350,
    },
  ],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        // isLoading: true,
      };
    default:
      return state;
  }
};

export const setItems = (id, color, price) => ({
  type: SET_ITEMS,
  payload: { id, color, price },
});

export default itemsReducer;
