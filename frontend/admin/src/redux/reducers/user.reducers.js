import { FETCH_USER } from "../action/type";

let initialState = {
  userInfo: {},
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      state.userInfo = payload;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
