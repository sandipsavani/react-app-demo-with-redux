import CardActionType from "./card.type";

const INITIAL_STATE = {
  cardItems: [],
  cardItems123: [],
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionType.GET_CARD_LIST:
      const { payload } = action;
      return {
        ...state,
        cardItems: payload,
        originalCardItemLists: payload,
      };
    case CardActionType.GET_FILTERED_CARD_LIST:
      const { searchField } = action;

      console.log("state: ", state);
      return {
        ...state,
        cardItems: filterData(searchField, state.originalCardItemLists),
      };
    default:
      return state;
  }
};

const filterData = (searchField, cardItems) =>
  cardItems.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );

export default cardReducer;
