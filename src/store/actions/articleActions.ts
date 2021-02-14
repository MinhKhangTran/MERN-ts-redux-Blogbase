import * as articles from "./index";
import axios from "axios";
import { Dispatch } from "redux";

// API Endpoint
const API_ENDPOINT = "https://blogbase-api.herokuapp.com";

// axios defaults
axios.defaults.headers.post["Content-Type"] = "application/json";

export const fetchArticles = (sort: any) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const { data } = await axios.post(
        `${API_ENDPOINT}/api/a1/articles/loadmore`,
        sort
      );
      const prevArts = getState().articles.fetchArticles;
      let newArts = [...data.data];

      if (prevArts) {
        newArts = [...prevArts, ...data.data];
      }

      dispatch(articles.fetchArticles(newArts));
    } catch (error) {
      console.log(error);
    }
  };
};
