import {ActionType} from "../../action";


const initialState = {
  data: [],
  currentPage: 1,
  sortColumn: null,
  sortOrder: `DESC`,
  filterString: null

};


const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case ActionType.CHANGE_SORTING:
      return Object.assign({}, state, {
        sortColumn: action.payload,
        sortOrder: state.sortOrder === `DESC` ? `ASC` : `DESC`,
      });
    default:
      return state;
  }
};

export {reducerApp};
