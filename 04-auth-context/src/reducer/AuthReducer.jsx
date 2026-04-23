export const initialAuthState = {
  user: null
};

export function authReducer(state, action) {

  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        user: action.user
      };

    case "LOGOUT":
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }

}