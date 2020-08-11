export const initialState = {
  user: null,
  playlists: [],
  playing: [],
  item: null,
  // token: null,
  // token:
  //   "BQDeDjcsRikKrD2C4VVcUY7YXhgCaPdtKhWVymdPTNDHHnRgfX04GbkCT4F4RjqOLQDuexODXwTojjv0l6nwoC8MLE2UeumFVORU-rKNiW6iJJ95wXwKn5My12DyMbjqopv2hS3zb2MjRUHKRLxFcLSM8eGADGOF4uSG0ZBfol64MCsOrMfT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
