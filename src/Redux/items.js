const SET_ITEMS = 'SET_ITEMS';
const SET_FILTER = 'SET_FILTER';

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
    {
      id: 5,
      color: 'yellow',
      price: 400,
    },
  ],
  filterBy: 'Home',
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        // isLoading: true,
      };

    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};

export const setItems = (id, color, price) => ({
  type: SET_ITEMS,
  payload: { id, color, price },
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export default cardReducer;
