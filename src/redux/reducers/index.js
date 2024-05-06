const initialState = {
  favourites: {
    content: [],
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: { content: [...state.favourites.content, action.payload] },
      };

    default:
      return state;
  }
};
export default reducers;
