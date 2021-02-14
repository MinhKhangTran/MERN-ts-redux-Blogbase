const initState = {};

interface IState {
  articles?: any;
  fetchArticles?: any;
}

type ArticleAction = { type: "FETCHING"; payload: any };

const reducer = (state: IState = initState, action: ArticleAction) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, fetchArticles: action.payload };
    default:
      return state;
  }
};
export default reducer;
