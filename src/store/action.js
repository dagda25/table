export const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_PAGE: `CHANGE_PAGE`,
};

export const ActionCreator = {
  getData: (data) => ({
    type: ActionType.LOAD_DATA,
    payload: data
  }),
  changeSorting: (data) => ({
    type: ActionType.CHANGE_SORTING,
    payload: data
  }),
};
