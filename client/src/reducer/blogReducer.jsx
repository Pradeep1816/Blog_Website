import SingleBlog from "../pages/SingleBlog";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_isLoading":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "BLOGS_DATA":
      return {
        ...state,
        isLoading: false,
        blogs: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SINGLE_LOADING":
      return {
        ...state,
        isSingLoading: true,
      };
    case "SINGLE_BLOG":
      return {
        ...state,
        isSingLoading: false,
        singleBlog: action.payload,
      };
    case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingLoading: false,
        isError: true,
      };
    default:
      return state;
  }
  return state;
};
