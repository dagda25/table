import {ActionCreator} from "./action";
import {AppRoute, APIRoute} from "../utils/const";
import {settings} from "../utils/const";

export const fetchData = () => (dispatch, _getState, api) => (
  api.get(APIRoute.POSTS)
    .then(({data}) => {
      dispatch(ActionCreator.getData(data));
    })
);
