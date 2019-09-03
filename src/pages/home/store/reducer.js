import { fromJS } from 'immutable'
import constants from './constants'

const defaultState = fromJS({
  topicList:[],
  articleList:[]
})

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    default:
      return state
  }
}

export default reducer