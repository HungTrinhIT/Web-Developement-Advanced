import { FETCH_USER, LOG_OUT } from "../action/type";

let initialState = {
  userInfo: {},
  isAuthenticated: false,
  token: null,
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      console.log("fetch new user", type);

      state.userInfo = payload.userInfo;
      state.isAuthenticated = true;
      state.token = payload.token;

      return { ...state };
    case LOG_OUT:
      console.log("Log out", type);
      state.userInfo = {};
      state.isAuthenticated = false;
      state.token = null;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
