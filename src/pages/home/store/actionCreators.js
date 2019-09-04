import constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const changeHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
  }
};

export const addHomeList = (result) => {
  return {
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(result),
  }
};

export const changePage = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page,
  }
};

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		});
  }
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get(`/api/homeList.json?page=${page}`).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result));
			dispatch(changePage(++page));
		});
  }
}
