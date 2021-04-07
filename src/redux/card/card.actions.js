import CardActionType from "./card.type";

export const getCardList = (users) => ({
  type: CardActionType.GET_CARD_LIST,
  payload: users,
});

export const getFilteredCardList = (searchField) => ({
  type: CardActionType.GET_FILTERED_CARD_LIST,
  searchField: searchField,
});
